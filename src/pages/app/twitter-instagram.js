import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'


import Header from 'components/header'
import Footer from 'components/footer'

import Button from 'components/button'
import Input from 'components/input'

export default function App(props) {
  
  // User fetching
  var initialData = {
    code: 101,
    errors: 'Loading',
    message: 'Data are being fetched.'
  }
  const [userData, setUserData] = useState(initialData);
  
  useEffect(() => {
    console.log('useEffects')
    fetch(`/api/user`)
    .then(response => response.json())
    .then(userData => {
      console.log('Fetch: User')
      if (!userData.errors) {
        setUserData({
          code: 200,
          message: 'User logged in',
          data: userData
        })
      } else {
        setUserData({
          code: 401,
          errors: 'Unauthorized',
          message: 'User is not logged in.'
        })
      }
    })
  }, [])



  const requestTwitter = async(e) => {
    e.preventDefault();
    let id = e.target[0].value;
    console.log(id)

    if (isValidTweetId(id)) {
      fetch(`/api/service/twitter/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetching tweet from the backend')
          if (!data.errors) {
            console.log(data)
          } else {
            console.log('error fetching twitter')
          }
        })
    } else {
      console.log('invalid tweet ID')
    }

  }


  function isValidTweetId(id) {
    return /^[0-9]+$/.test(id);
  }
  
  return (
    <div className="">
      <Head>
        <title>Moqop · Render Twitter tweet as Instagram Story</title>
        <meta name="description" content="Visualise your exercise activity for Instagram story with a decent polyline over the picture you made during the workout." />
      </Head>

      <section>
      <Header user={userData} />
      </section>
      <div className="page">
        <section>

          {/* { (userData.code === 401) ? */}
            <>
              <h1 className="title text-32 sm:text-40 md:text-48 font-black text-center">
              Render Twitter’s tweet <br className='hidden md:block' /> 
                <span className='titleColor inline'>as Instagram Story</span>
              </h1>
              <div className='text-18 md:w-2/3 text-center mt-24 mx-auto mb-32 font-semibold'>
                Render social media content for Instagram 
                <br className='hidden md:block' /> 
                from any Twitter’s tweet
                <br />
              </div>

              <div className="sectionBlock flex flex-col border-2 border-grey rounded-8 p-16 mb-24 text-center font-semibold">
                <div className="flex gap-16 justify-center items-center p-8">
                  <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-8">
                    <Image src="/images/services/twitter.svg" width="24" height="24" alt="Strava" />
                    Twitter<br className='block sm:hidden' /> Tweet
                  </div>
                  <span className='text-white/50'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12H17.5M17.5 12L13.5 8M17.5 12L13.5 16" stroke="#38424B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div className="flex flex-1 flex-col sm:flex-row  items-center justify-center gap-8">
                    <Image src="/images/services/instagram.svg" width="24" height="24" alt="Instagram" />
                    Instagram <br className='block sm:hidden' /> Story
                  </div>
                </div>
                <form onSubmit={requestTwitter} className='mt-8 pt-16 flex gap-16 border-t-2 border-grey'>
                  <Input type="text" name="tweetUrl" id="tweetUrl" className=" w-full" placeholder="Tweet's ID" />
                  <Button type="button" text="Render image"  target="_blank" size="large" className="bg-[#1D9BF0]" />
                  {/* <Button text="Connect with Strava" href="/auth/strava" className="mt-8 bg-orange w-full" /> */}
                </form>
              </div>
            </>

          {/* : ''}
          { userData.code == 101 ? '' : <Integration loginButton={userData.errors ? true : false}/>} */}
        </section>


        <div className="mt-48">
          <div className="relative max-w-full overflow-hidden no-scrollbar">
            <div className="flex justify-center gap-8 md:gap-16 p-8 outline-hidden w-full">
              <div className='h-[400] '><Image alt="twitter image" src="/images/examplesTwitter/1.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
              <div className='h-[400] '><Image alt="twitter image" src="/images/examplesTwitter/2.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
              <div className='h-[400]'><Image alt="twitter image" src="/images/examplesTwitter/3.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
              <div className='h-[400] hidden sm:block'><Image alt="twitter image" src="/images/examplesTwitter/4.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
            </div>
          </div>
        </div>

        <section className='my-64 text-center md:text-left'>

          <div className="flex flex-col md:flex-row gap-64">
            <div className='flex flex-1 flex-col justify-center'>
              <div className="uppercase font-bold opacity-50">URL to image</div>
              <h2 className='text-40 font-black mb-16'><span className='text-orange'>Instant design</span> <br className='hidden sm:block' /> creation and export</h2>
              <div className="text-18">Focus on your <strong>social media audience</strong> and let the design creation on smart tools. Image render and export takes just a second so you won’t ever waste your time on content creation thanks to Moqop</div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/images/examplesTwitter/feature1.png" width="466" height="322" alt="Feature 1" />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-64 mt-64">
            <div className="flex-1 flex justify-center">
            <Image src="/images/examplesTwitter/feature2.png" width="420" height="413" alt='Feature 2' />
            </div>
            <div className='flex flex-1 flex-col justify-center'>
              <div className="uppercase font-bold opacity-50">Click here and there</div>
              <h2 className='text-40 font-black k mb-16'>No-code design <br className='hidden sm:block' /> <span className='text-blue'>automation platform</span> posts</h2>
              <div className="text-18"><strong>Online no-code design tool</strong> lets you create your social media content without even touching app again. Everything is ready right after you publish something on Twitter or you can generate image adhoc by copy&pasing Tweet’s URL to Moqop.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-64 mt-64">
            <div className='flex flex-1 flex-col justify-center'>
              <div className="uppercase font-bold opacity-50">templates</div>
              <h2 className='text-40 font-black mb-16'><span className='text-orange'>Consistent</span> <br className='hidden sm:block' /> social media feed</h2>
              <div className="text-18">Data rules them all. From Instagram Story to the post or any other format you need. Click one button and get <strong>content in all social media formats</strong>. What about posting them automatically everywhere? </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/images/examplesTwitter/feature3.png" width="403" height="404" alt='feature 3' />
            </div>
          </div>

          <div className="text-center mt-80">
            <h2 className='text-40 font-black k mb-16'>
              How to use Moqop <br className='hidden md:block' />
              with Instagram and Twitter?
            </h2>
            <div className="flex flex-col text-left gap-16 mt-32 max-w-[500px] m-auto">
              <div className="flex flex-1 items-center px-32 py-16 border border-grey-darken rounded cursor-default hover:bg-grey/50 ">
                <span className='text-40 font-bold text-[#7475D5]'>1</span>
                <div className="ml-32">
                  <h3 className='text-20 font-semibold mb-4'>Copy Tweet's URL</h3>
                </div>
              </div>
              <div className="flex flex-1 items-center px-32 py-16 border border-grey-darken rounded cursor-default hover:bg-grey/50 ">
                <span className='text-40 font-bold text-[#AD6881]'>2</span>
                <div className="ml-32">
                  <h3 className='text-20 font-semibold mb-4'>Paste the URL to Moqop</h3>
                  <span className='text-16 opacity-50'>Paste the URL to Moqop and select format you need e.g.: Instagram Story or Instagram Post</span>
                </div>
              </div>

              <div className='mt-8 border-grey'>
                <Button text="Request early access" target="_blank" size="large" href="https://forms.gle/m6WUF8zg9gAkW7JN9" className="mt-8 bg-[#1D9BF0] w-full" />
              </div>
            </div>
          </div>
        
        </section>

        <div className="gradientFeedback text-center py-80">
          <h2 className='text-40 font-black k mb-16'>Appreciate <span className='titleColor inline'>your feedback</span></h2>
          <div className="text-18">Moqop needs your help by testing the product, providing good <br className='hidden md:block' />  or bad feedback, and suggesting new features. <br className='hidden md:block' /> Thanks a lot 🙏</div>

          <Button text="Send a feedback" target="_blank" size="large" href="mailto:hello@moqop.com" className="mt-32 bg-black" />
        </div>




         

      </div>{/* container */}

      <section>
        <Footer />
      </section>
    </div>
  )
}


function LoadingRow(props) {
  console.log(props.className)
  return (
    <div className={`flex items-center gap-16 text-center rounded-4 h-[55px] mb-8 p-8 bg-grey text-black/50 ${props.className}`}>
      <div className='block w-32 h-32 bg-black/10 ml-4 rounded'></div>
      <div className='flex flex-1 flex-col justify-center'>
          <div className='block h-8 w-1/3 bg-black/10 mb-8 rounded'></div>
          <div className='block h-8 w-1/4 bg-black/10 rounded'></div>
      </div>
    </div>
  )
}