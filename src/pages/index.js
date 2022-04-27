import Head from 'next/head'
import Image from 'next/image'

import Header from 'components/header'
import Footer from 'components/footer'

import Integration from 'components/integration'
// var polyline = require('@mapbox/polyline');
// var Canvas = require('canvas');
import polyline from '@mapbox/polyline'
import Canvas from 'canvas'
import Button from 'components/button'
import Theme from 'themes/strava/strava1'
import Seturl from 'components/seturl'
// import db from 'utils/firebase'
import { useEffect, useState } from 'react'
import {server} from '../../api/utils/functions'
import e from 'connect-timeout'

export default function Home(props) {
  
  // const [activityID] = useState(6871108204);
  
  // Load initial state
  // const postsResponse = fetch(`${server}/data/activity.json`);
  // var initialActivityData = postsResponse.json();

  var initialData = {
    code: 101,
    errors: 'Loading',
    message: 'Data are being fetched.'
  }

  // var initialData = {
  //   code: 401,
  //   errors: 'Unauthorized',
  //   message: 'User needs to be logged first.'
  // }

  const [activityData, setActivityData] = useState(initialData);
  const [userData, setUserData] = useState(initialData);
  const [itemsToShow, setItemsToShow] = useState(5);


  function formatSeconds(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  function formatPace(timeInSeconds, distanceInMetres) {
    var pace = (timeInSeconds/distanceInMetres)/60*1000;
    var leftover = pace % 1;
    var minutes = pace - leftover;
    var seconds = Math.round(leftover * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    var finalPace = minutes+":"+seconds
    return finalPace
  }

  function renderCanvas(data) {
    // console.log(data)
    if (data === null) {
      return
    }
    var Image = Canvas.Image;
    var canvas = Canvas.createCanvas(64, 64);
    var context = canvas.getContext('2d');
    let arr = polyline.decode(data);

    context.clearRect(0, 0, canvas.width, canvas.height);
    var minX, minY, maxX, maxY;
    var firstPoint = [0,0]
    arr.forEach((p, i) => {
      if (i === 0) {
        // if first point
        minX = maxX = p[1];
        minY = maxY = p[0];
      } else {
        minX = Math.min(p[1], minX);
        minY = Math.min(p[0], minY);
        maxX = Math.max(p[1], maxX);
        maxY = Math.max(p[0], maxY);
      }
    });

    // console.log(minX, minY, maxX, maxY)

    // now get the map width and heigth in its local coords
    const mapWidth = maxX - minX;
    const mapHeight = maxY - minY;
    const mapCenterX = (maxX + minX) / 2;
    const mapCenterY = (maxY + minY) / 2;

    // console.log(mapWidth, mapHeight, mapCenterX, mapCenterY)

    // to find the scale that will fit the canvas get the min scale to fit height or width
    const scale = Math.min(canvas.width / mapWidth, canvas.height / mapHeight) * 0.9;

    // Now you can draw the map centered on the cavas
    context.beginPath();
    // console.log(arr[0][0]);
    
    arr.forEach((p, i) => {
      if (i === 0) {
        firstPoint[0] = (p[1] - mapCenterX) * scale + canvas.width / 2
        firstPoint[1] = (p[0] - mapCenterY) * -scale + canvas.height / 2
      }
      context.lineTo(
        (p[1] - mapCenterX) * scale + canvas.width / 2,
        (p[0] - mapCenterY) * -scale + canvas.height / 2
      );
    });

    // TODO - make it rounded
    // https://stackoverflow.com/questions/29074956/in-mapbox-js-how-to-smooth-a-polyline

    context.lineWidth = 2;
    context.strokeStyle = '#38424b';
    context.lineJoin = "round";
    context.lineCap = 'round',
    context.stroke();

    const radius = 3;
    const x = firstPoint[0]
    const y = firstPoint[1]
    context.beginPath();
    // console.log('radius: ' + radius)
   
    // Clearing circle
    // context.arc(x, y, radius, 0, 2 * Math.PI, false);
    // context.clip()
    // context.clearRect(x - radius, y-radius, x + radius*2, y + radius*2);
    // console.log('firstPoint: ' + firstPoint)
    
    // Starting point circle
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = '#38424b';
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    // console.log('radius: ' + radius)
    context.fill();

    // save canvas image as data url (png format by default)
    return canvas.toDataURL();
  }

  
  useEffect(() => {

    fetch(`/api/user`)
      .then(response => response.json())
      .then(userData => {
        // console.log('Fetch: User')
        if (!userData.errors) {
          setUserData({
            code: 200,
            message: 'User logged in',
            data: userData
          })
          // console.log(userData)  
          fetch(`/api/activity`)
          .then(response => response.json())
          .then(data => {
            // console.log('Fetch: Activity')
            if(data.length == 0) {
              setActivityData({
                code: 204,
                errors: 'No content',
                message: 'User does not have any activities to show.'
              })
              console.log(userData)
            } else if(data.errors) {
              setActivityData({
                code: 401,
                errors: 'No activity because unauthorised user',
                data: data.errors[0]
              })
              setUserData({
                code: 401,
                errors: 'User is not logged in',
                data: userData
              })
            } else {
              setActivityData({
                code: 200,
                message: 'Activities are available to show.',
                data: data
              })
              // console.log(data)
              // setActivityData(data)
              // console.log(userData)
            }
          })
          .catch(rejected => {
            console.log(rejected)
            setActivityData({
              code: 404,
              message: 'Activity response has been rejected.',
            })
          });
        } else {
          setUserData({
            code: 401,
            errors: 'Unauthorized',
            message: 'User is not logged in.'
          })
        }
      })
      .catch(rejected => {
        console.log(rejected)
        setUserData({
          code: 404,
          message: 'User response has been rejected.',
        })
      });

      
    }, [])
    
  console.log(userData)
  console.log(activityData)

  const numberPerPage = 5
  const showmore = () => {

    const showItem = itemsToShow + numberPerPage
    // if (showItem <= activityData.data.length) {
      setItemsToShow(showItem)
    // }
    console.log('showItem ' + showItem)
    console.log('activityData.data.length '+activityData.data.length)
    console.log('itemsToShow' + itemsToShow)
    // setItemsToShow(activityData.data.length)
  }
  
  const showless = () => {
    const showItem = itemsToShow - numberPerPage
    if (showItem >= numberPerPage) {
      setItemsToShow(showItem)
    }
    console.log(showItem)
    // setItemsToShow(3)
  }



  return (
    <section>
      <Head>
        <title>Strava activity image</title>
        <meta name="description" content="Generated pretty image from your Strava activity" />
      </Head>

      <Header />

      {
        (userData.code == 101) ?
          '' :
          <Integration loginButton={userData.errors ? true : false}/> 
      }



      {/* <Seturl onChildChange={changeActivityID} /> */}
      {/* <div className="text-center opacity-50 text-12 -mt-32 ">{activityID}</div> */}
      {/* <Theme {...activityData} /> */}
      
      {/* <Button onChildClick={downloadImage} text="Download image" className='w-full mt-16' /> */}

      {/* {activityData[0].map((key, index) => (
        // <Button key={index} text={key} bg="grey" size="small" className="mr-8" />
        <div key={index} className=''>{key}</div>
      ))} */}
      
      {
        (!userData.errors) ? (
          (activityData.code === 200) ? 
            activityData.data.slice(0, itemsToShow).map(function(key, index){
              var distance = `${+parseFloat(key.distance/1000).toFixed(2)} km`;
              var time = formatSeconds(key.moving_time)
              return (
                <div>
                  <a className='flex items-center rounded-4 mb-4  py-8 px-8 hover:bg-grey' key={index} href={`${server()}/api/render/${key.id}`}>
                    {key.map ? 
                      <img src={renderCanvas(key.map.summary_polyline)} className="w-32 h-32 ml-4 mr-16 opacity-50" />
                    : ''}
                    <div className='flex flex-col justify-center'>
                      <span className='mt-4 leading-7'>{key.name}</span>
                      <span className='block text-12 opacity-50 leading-7'>{key.type} · {distance} · {key.total_elevation_gain > 100 ? `${key.total_elevation_gain} m` : formatPace(key.moving_time, key.distance) } · {time}</span>
                    </div>
                  </a>
                  <div className="border-b border-grey mb-4"></div>
                </div>
              )
            })
          :
          (activityData.code === 204) ? 
            <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey'>
              You don't have any activity yet. <br />
              Let's record some activity on Strava first.
            </div>
          : 
          (userData && activityData.code === 101) ? 
            <div>
              <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey text-black/50'>Loading data...</div>
              <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey/50'>&nbsp;</div>
              <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey/20'>&nbsp;</div>
            </div>
          : ''
        ) : ''
      }

      {!userData.errors && activityData.code === 200 && (activityData.data.length > itemsToShow) ?
        <div className="">
          <button onClick={showmore} className="w-full rounded-4 mb-8 leading-7 py-8 bg-grey/50 hover:bg-grey mt-8 m-auto text-center text-black/70">Show more</button>
          {/* <button onClick={showless}>Show Less</button> */}
        </div>
      : ''}


      { (userData.code === 401) ?
        <div className="mt-48">
          <h2 className="text-16 font-semibold mb-4">Generated examples</h2>
          <p className='leading-8'>Check out generated Instagram Stories based on moqop user's Strava activity.</p>
          <div className="relative overflow-auto no-scrollbar">
            <div className="flex w-[1157px] gap-8 mt-8">
              <Image src="/images/examples/1.jpg" width="225" height="400" className="rounded"></Image>
              <Image src="/images/examples/2.jpg" width="225" height="400" className="rounded"></Image>
              <Image src="/images/examples/3.jpg" width="225" height="400" className="rounded"></Image>
              <Image src="/images/examples/4.jpg" width="225" height="400" className="rounded"></Image>
              <Image src="/images/examples/5.jpg" width="225" height="400" className="rounded"></Image>
            </div>
          </div>
        </div>
        : '' }


      <Footer />
    </section>
  )
}