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
              console.log(results)
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
  

  return(
    <section>
      <Header />
      <div className="page">
        <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
          <span className='titleColor inline'>Open startup</span>
        </h1>
        <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Moqop is a part of open-startup movement. <br className='hidden sm:block' />All of the metrics will be publicly available.</div>
        
        <div className="flex w-full items-center">
          {/* <div className="flex-0">
            <div className="text-32 font-semibold">{usersData[usersData.length - 1].counts}</div>
            <span>People signups</span>
          </div> */}
          <div className="h-[100px] w-full flex-1 mt-64 mb-32">
            <ResponsiveContainer>
              <LineChart data={usersData} >
                {/* <CartesianGrid strokeDasharray="5 3" /> */}
                <XAxis dataKey="epoch" domain={['dataMin', 'dataMax']} tick={false} axisLine={true} stroke="#ccc" />
                <YAxis width={20}  dataKey="counts" domain={[0, 'dataMax']} tick={{ fill: '#ccc' }} tickLine={false} axisLine={false}  />
                <Tooltip content={<CustomTooltip />}  />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="date" stroke="#6378EC" strokeWidth="2" isAnimationActive={false} />
                <Line type="monotone" dataKey="counts" stroke="#6378EC" strokeWidth="2" isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="-mt-24 text-center text-12 text-bold opacity-40">Number of new signups in Moqop</div>
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
        {`${payload[1].value}`}
      </div>
    );
  }

  return null;
};