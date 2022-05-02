import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'components/header'
import Footer from 'components/footer'
import Integration from 'components/integration'

import polyline from '@mapbox/polyline'
import Canvas from 'canvas'

// import User from 'components/user'

import Button from 'components/button'
import Theme from 'themes/strava/strava1'
import Seturl from 'components/seturl'

import { useEffect, useState } from 'react'
import {server} from '../../api/utils/functions'

export default function Home(props) {
  
  var initialData = {
    code: 101,
    errors: 'Loading',
    message: 'Data are being fetched.'
  }

  const [loadingState, setLoadingState] = useState(false);
  const [loadingSecondsState, setLoadingSecondsState] = useState(5);
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

  
  // Countdown for loading state
  var test = loadingSecondsState
  const showLoading = () => {
    setLoadingState(true)
    var interval = setInterval(() => {
      test = test - 1
      console.log(test)
      if (test >= 1) {
        setLoadingSecondsState(test)
      } else {
        setLoadingState(false)
        clearInterval(interval);
      }
    }, 1000);
  }


  const numberPerPage = 5
  const showmore = () => {
    const showItem = itemsToShow + numberPerPage
    setItemsToShow(showItem)
  }


    //   console.log('User components:')
    // console.log(User)


  return (
    <div className="">
      <Head>
        <title>Strava activity image</title>
        <meta name="description" content="Generated pretty image from your Strava activity" />
      </Head>

      <section>
        <Header user={userData} />
      </section>
      <div className="page">
        <section>

          { (userData.code === 401) ?
            <>
              <h1 className="title text-32 sm:text-40 md:text-48 font-black text-center">
                Generate Instagram story <br className='hidden md:block' /> 
                <span className='titleColor inline'>from Strava activity</span>
              </h1>
              <div className='text-18 md:w-2/3 text-center mt-24 mx-auto mb-32 font-semibold'>Visualise your excercise activity for Instagram story with a decent polyline over the picture you made during the workout.</div>
            </>
          : ''}

          { userData.code == 101 ? '' : <Integration loginButton={userData.errors ? true : false}/>}
        </section>


        { (userData.code === 401) ?
          // Examples
          <div className="mt-48">
            <div className="relative overflow-auto no-scrollbar">
              <div className="flex justify-center gap-8 md:gap-16 p-8">
                <div><Image src="/images/examples/1.jpg" width="225" height="400" className="rounded flex-1" /></div>
                <div><Image src="/images/examples/2.jpg" width="225" height="400" className="rounded flex-1" /></div>
                <div className='hidden sm:block'><Image src="/images/examples/3.jpg" width="225" height="400" className="rounded flex-1" /></div>
                <div className='hidden md:block'><Image src="/images/examples/4.jpg" width="225" height="400" className="rounded flex-1" /></div>
                <div className='hidden lg:block'><Image src="/images/examples/5.jpg" width="225" height="400" className="rounded flex-1" /></div>
              </div>
            </div>
          </div> : '' }

          { (userData.code === 401) ?
            <>
              <section className='my-64 text-center md:text-left'>
                <div className="flex flex-col md:flex-row gap-64">
                  <div className='flex flex-1 flex-col justify-center'>
                    <div className="uppercase font-bold opacity-50">Output in seconds</div>
                    <h2 className='text-40 font-black mb-16'>Design <span className='text-orange'>100x faster</span> <br className='hidden sm:block' /> than Graphic Designer</h2>
                    <div className="text-18">Spend more time on pushing your data and less on the designing <strong>social media content</strong>. Time to get result is less than you need to lace your running shoes laces.</div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <Image src="/images/content/generation.jpg" width="427" height="339" />
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-64 mt-64">
                  <div className="flex-1 flex justify-center">
                    <Image src="/images/content/posts.jpg" width="403" height="363" />
                  </div>
                  <div className='flex flex-1 flex-col justify-center'>
                    <div className="uppercase font-bold opacity-50">Output in seconds</div>
                    <h2 className='text-40 font-black k mb-16'>Share immersive <br className='hidden sm:block' /> <span className='text-blue'>social media</span> posts</h2>
                    <div className="text-18"><strong>Predefined template</strong> keep your feed consistent and future features will allow you to personalize posts by using <strong>custom modifications</strong>.</div>
                  </div>
                </div>

                <div className="text-center mt-80">
                  <h2 className='text-40 font-black k mb-16'>How to use Moqop?</h2>
                  <div className="text-18">Watch a short video about how to set up strava activity to get solid results.</div>
                  <div className="video-container rounded mt-48 m-auto aspect-video max-w-7xl">
                    <iframe className='' width="560" height="315" src="https://www.youtube-nocookie.com/embed/X3vaJhJyJZ0?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              
              </section>

              <div className="gradientFeedback text-center py-80">
                <h2 className='text-40 font-black k mb-16'>Appreciate <span className='titleColor inline'>your feedback</span></h2>
                <div className="text-18">Moqop needs your help by testing the product, providing good <br className='hidden md:block' />  or bad feedback, and suggesting new features. <br className='hidden md:block' /> Thanks a lot 🙏</div>

                <a href="mailto:hello@moqop.com" target="_blank" className='inline-block bg-black text-white mt-32 py-16 px-32 text-16 font-semibold rounded'>Send a feedback</a>
              </div>
            </>
          : '' }

          <section>

            { (!userData.errors && activityData.code === 200) ? 
              <div className="sectionBlock">
                { activityData.data.slice(0, itemsToShow).map(function(key, index){
                  var distance = `${+parseFloat(key.distance/1000).toFixed(2)} km`;
                  var time = formatSeconds(key.moving_time)
                  return (
                    <div key={index}>
                      <Link href={`${server()}/api/render/${key.id}`}>
                        <a className='flex items-center rounded-4 mb-4  py-8 px-8 hover:bg-grey' onClick={showLoading}>
                          {key.map ? 
                            <img src={renderCanvas(key.map.summary_polyline)} className="w-32 h-32 ml-4 mr-16 opacity-50" />
                          : ''}
                          <div className='flex flex-col justify-center'>
                            <span className='mt-4 leading-7'>{key.name}</span>
                            <span className='block text-12 opacity-50 leading-7'>{key.type} · {distance} · {key.total_elevation_gain > 100 ? `${key.total_elevation_gain} m` : formatPace(key.moving_time, key.distance) } · {time}</span>
                          </div>
                        </a>
                      </Link>
                      <div className="border-b border-grey mb-4 mx-4"></div>
                    </div>
                  )
                }) }
              </div>
            : '' }

            { (!userData.errors && activityData.code === 204) ? 
              <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey'>
                You don't have any activity yet. <br />
                Let's record some activity on Strava first.
              </div> : '' }

            { (!userData.errors && activityData.code === 101) ? 
              <div className='sectionBlock'>
                <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey text-black/50'>Loading data...</div>
                <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey/50'>&nbsp;</div>
                <div className='flex justify-center text-center rounded-4 mb-8 border-grey p-16 bg-grey/20'>&nbsp;</div>
              </div> : '' }

            { !userData.errors && activityData.code === 200 && (activityData.data.length > itemsToShow) ?
              <div className="sectionBlock">
                <button onClick={showmore} className="w-full rounded-4 mb-8 leading-7 py-8 bg-grey/50 hover:bg-grey mt-8 m-auto text-center text-black/70">Show more</button>
              </div> : ''}




            { <div className={`absolute transition top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center text-center  bg-grey-darken/90 ${loadingState ? ' opacity-100 pointer-events-auto': ' opacity-0 pointer-events-none'}`}>
                <div className="rounded drop-shadow-md p-32 bg-white">
                  Your image is ready in {loadingSecondsState} seconds. <br /> 
                  Our designers are super fast :)
                </div>
            </div> }
          </section>

        </div>{/* container */}

        <section>
        <Footer />
      </section>
    </div>
  )
}