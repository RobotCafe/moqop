import Head from 'next/head'
import Integration from 'components/integration'
import Button from 'components/button'
import Theme from 'themes/strava/strava1'
import Seturl from 'components/seturl'
// import db from 'utils/firebase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home(props) {
  
  
    const router = useRouter()
    const { id } = router.query
  
    console.log(id)
  
  


  const [activityID, setactivityID] = useState(6871108204);
  
  // Load initial state
  // const postsResponse = fetch(`${server}/data/activity.json`);
  // var initialActivityData = postsResponse.json();
  const [activityData, setActivityData] = useState({data: 'initial'});

  // console.log(props.test.logs.new_token)

  useEffect(() => {
    // fetch('https://www.strava.com/api/v3/athlete',
    fetch(`https://www.strava.com/api/v3/activities/${activityID}`,
        {
          method: 'GET',
          'Content-Type': 'application/json', 
          headers: {
            Authorization: `Bearer ${props.test.logs.new_token}`,
          },
        },
      )
      .then((res) => res.json())
      .then((data) => {
        setActivityData(data)
      })
  }, [])


  const fetchData = async (event) => {
    // console.log('in da event' + event)
    // const resStats = await fetch(
    //   // 'https://www.strava.com/api/v3/athletes/42409445/stats',
    //   // `https://www.strava.com/api/v3/activities/${event}`,
    //   'https://www.strava.com/api/v3/athlete',
    //   {
    //     method: 'GET',
    //     'Content-Type': 'application/json', 
    //     headers: {
    //       Authorization: `Bearer ${props.test.logs.new_token}`,
    //     },
    //   },
    // )
    // .then(
    //   response => (
    //     console.log(response.json()),
    //     // setActivityData(response)
    //   )
    // )
    // .then(data => {
    //     console.log(data)
    //     setActivityData(data)
    // })


    // var activityData = await resStats.json()


    // fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(data => {
  //         setToDos(data) // Set the toDo variable
  //         setIsLoading(false)
  //     })
    console.log(event)
    // setActivityData(resStats.json())
    // return await resStats.json()
  }

  
    const changeActivityID = async (event) => {
      console.log('test')
      console.log(`number: ${event}`)
      setactivityID(event)
      console.log(activityID)
      // let fetchedData = await fetchData(event)
      // fetchedData.then(function(result){
      //   setActivityData(result)
      //   console.log(result)
      //   console.log(setActivityData)
      // })
    }

  const downloadImage = async (event) => {
    console.log('GTD')
  }
  
//   useEffect(() => {
//     // setIsLoading(true)
//     const fetchData = async (event) => {
//       const resStats = await fetch(
//         // 'https://www.strava.com/api/v3/athletes/42409445/stats',
//         'https://www.strava.com/api/v3/activities/6871108204',
//         // 'https://www.strava.com/api/v3/athlete',
//         {
//           method: 'GET',
//           'Content-Type': 'application/json', 
//           headers: {
//             Authorization: `Bearer ${props.test.logs.new_token}`,
//           },
//         },
//       )
//       console.log(resStats.json())
//       setActivityData(resStats.json())
//       // return await resStats.json()
//     }


//     // fetch('https://jsonplaceholder.typicode.com/todos/')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         setToDos(data) // Set the toDo variable
//     //         setIsLoading(false)
//     //     })
// }, [])

  




  // const fetchData = async () => {
  //   // const response = await fetch("/api/person");
  //   const response = await fetch("/data/activity.json");
  
  //   if (!response.ok) {
  //     console.log(response.status);
  //   }
  //   const activity = await response.json();
  //   console.log(activity);
  //   return activity.body;
  // };

  // const activityData = await fetchData()

  return (
    <section className=''>
      <Head>
        <title>Strava activity image</title>
        <meta name="description" content="Generated pretty image from your Strava activity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Integration /> 

      <Seturl onChildChange={changeActivityID} />
      <div className="text-center opacity-50 text-12 -mt-32 ">{activityID}</div>
      <Theme {...activityData} />
      
      <Button onChildClick={downloadImage} text="Download image" className='w-full mt-16' />

    </section>
  )
}


const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://strava-story.vercel.app';

