import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

export default function OpenStartup() {
  function parseDate(date) {
    // var date =  new Date('2022-04-22T10:00:00Z')
    var date =  new Date(date)
    year = date.getFullYear();
    month = date.getMonth()+1;
    dt = date.getDate();
  
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    var formatedDate = year+'-' + month + '-'+dt

    console.log( formatedDate);
    return formatedDate
  }

  const [usersData, setUsersData] = useState([{date: '2022-4-21', counts: 1, epoch: 1650492000}, {date: '2022-4-21', counts: 1, epoch: 1650492000}]);

  useEffect(() => {

    fetch(`/api/open`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (!data.errors) {

          var arr = data, // fill it with array with your data
          results = {}, rarr = [], i, date;

          for (i=0; i<arr.length; i++) {
            // get the date
            arr[i] = new Date(arr[i])
            date = [arr[i].getFullYear(),arr[i].getMonth()+1,arr[i].getDate()].join("-");
            results[date] = results[date] || 0;
            results[date]++;
          }
          // you can always convert it into an array of objects, if you must
          var counter = 0
          for (i in results) {
            if (results.hasOwnProperty(i)) {
              // console.log(results)
              counter = counter + results[i]
              // var count = results[i -1]
              var epoch = new Date(i).getTime() / 1000
              rarr.push({date:i,counts:counter, epoch: epoch});
            }
          }

          const sortedActivities = rarr.sort((a, b) => b.date - a.date)


          console.log(sortedActivities)
          setUsersData(sortedActivities)

        }
      }
    )
  }, []);
  
  var expenses = [
    {
      date: '2019-09-25T00:00:00Z',
      name: 'domain',
      value: 13.2
    },
    {
      date: '2020-04-28T00:00:00Z',
      name: 'server',
      value: 59.4
    },
    {
      date: '2020-09-17T00:00:00Z',
      name: 'domain',
      value: 14.3
    },
    {
      date: '2021-04-28T00:00:00Z',
      name: 'server',
      value: 59.4
    },
    {
      date: '2020-09-03T00:00:00Z',
      name: 'domain',
      value: 14.3
    },
    {
      date: '2021-05-22T00:00:00Z',
      name: 'server',
      value: 16.38
    },
  ]

  var  totalExpenses = 0, i
  for (i=0; i < expenses.length; i++) {
    totalExpenses = totalExpenses + expenses[i].value
    expenses[i].absolute = totalExpenses
    console.log(totalExpenses)
  }



  return(
    <section>
      <Head>
        <title>Moqop is open startup</title>
        <meta name="description" content="Moqop is a part of open-startup movement. All of the metrics will be publicly available." />
      </Head>

      <Header />
      <div className="page">
        <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
          <span className='titleColor inline'>Open startup</span>
        </h1>
        <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Moqop is a part of open-startup movement. <br className='hidden sm:block' />All of the metrics will be publicly available.</div>
        
        <div className="w-full bg-grey/50 border border-grey p-16 rounded items-center mb-24">
          <div className="flex-1">
            <span className='opacity-50 font-semibold'>Signed People</span>
            <div className="text-24 font-bold">{usersData[usersData.length - 1].counts}</div>
          </div>
          <div className="h-[100px] w-full -mt-32">
            <ResponsiveContainer>
              <LineChart data={usersData} >
                {/* <CartesianGrid strokeDasharray="5 3" /> */}
                {/* <XAxis dataKey="epoch" domain={['dataMin', 'dataMax']} tick={false} axisLine={false} stroke="#ccc" /> */}
                {/* <YAxis width={20}  dataKey="counts" domain={[0, 'dataMax']} tick={{ fill: '#ccc' }} tickLine={false} axisLine={false}  /> */}
                <Tooltip content={<CustomTooltip />} cursor={{stroke: 'transparent'}}  />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="counts" stroke="#6378EC" strokeWidth="2" isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
       
       
        <div className="md:flex w-full gap-24 items-center">
          <div className='flex-1 border border-grey p-16 rounded items-center mb-48 bg-grey/50'>
            <div className="flex-1">
              <span className='opacity-50 font-semibold'>MRR – Monthly Recurring Revenue</span>
              <div className="text-24 font-bold">$0</div>
            </div>
            <div className="h-[100px] w-full -mt-32">
              <ResponsiveContainer>
                <LineChart data={[{income:0},{income:0}]} >
                  <Tooltip content={<CustomTooltip />} cursor={{stroke: 'transparent'}}  />
                  <Line type="monotone" dataKey="income" stroke="#79D292" strokeWidth="2" isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
         
          <div className='flex-1 border border-grey p-16 rounded items-center mb-48 bg-grey/50'>
            <div className="flex-1">
              <span className='opacity-50 font-semibold'>Costs</span>
              <div className="text-24 font-bold">${totalExpenses}</div>
            </div>
            <div className="h-[100px] w-full -mt-32">
              <ResponsiveContainer>
                <LineChart data={expenses} >
                  <Tooltip content={<CustomTooltip />} cursor={{stroke: 'transparent'}}  />
                  <Line type="monotone" dataKey="absolute" stroke="#DA5E41" strokeWidth="2" isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
         
        </div>
      </div>{/* Content */}
      <Footer />
    </section>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black text-white px-8 rounded text-12">
        {/* <p className="label">{`${label} : ${payload[0].value} : ${payload[1].value}`}</p> */}
        {`${payload[0].value.toFixed(0)}`}
      </div>
    );
  }

  return null;
};