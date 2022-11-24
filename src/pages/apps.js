import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Button from 'components/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'



export default function About() {

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


  return(
    <section>
      <Head>
        <title>All integrations · Moqop</title>
        <meta name="description" content="Moqop is online visualiser that generates content based on the specific data input, currently focusing on Strava activities, but it can be extendable by any type of content." />
      </Head>

      <Header user={userData} />
      
      <div className='page'>
        <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
          <span className='titleColor inline'>Explore apps</span>
        </h1>
        <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Discover a potential of the design automation.</div>
      
        <Link href="/">
          <a className="sectionBlock flex flex-col border-2 border-grey rounded p-16 mb-24 text-center font-semibold bg-grey hover:bg-white transition">
            <div className="flex gap-16 justify-center items-center">
              <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-8">
                <Image src="/images/services/strava.svg" width="24" height="24" alt="Strava" />
                Strava <br className='block sm:hidden' />
              </div>
              <span className='text-white/50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 12H17.5M17.5 12L13.5 8M17.5 12L13.5 16" stroke="#38424B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="flex flex-1 flex-col sm:flex-row  items-center justify-center gap-8">
                <Image src="/images/services/instagram.svg" width="24" height="24" alt="Instagram" />
                Instagram <br className='block sm:hidden' />
              </div>
            </div>
            <div className='mt-16 pt-16 border-t-2 border-grey-darken font-normal text-left'>
              {/* <Button text="Explore Strava integration" href="/" className="mt-8 w-full" /> */}
              <p><strong>Strava to Instagram</strong></p>
              Generate a pretty social media content of your last workouts based on your Strava activity. It includes images, shape of route and basic metrics like distance, time, pace, or elevation gain.
            </div>
          </a>
        </Link>

        <Link href="/twitter-instagram">
          <a className="sectionBlock flex flex-col border-2 border-grey rounded p-16 mb-24 text-center font-semibold bg-grey hover:bg-white transition">
            <div className="flex gap-16 justify-center items-center">
              <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-8">
                <Image src="/images/services/twitter.svg" width="24" height="24" alt="Strava" />
                Twitter <br className='block sm:hidden' />
              </div>
              <span className='text-white/50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 12H17.5M17.5 12L13.5 8M17.5 12L13.5 16" stroke="#38424B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="flex flex-1 flex-col sm:flex-row  items-center justify-center gap-8">
                <Image src="/images/services/instagram.svg" width="24" height="24" alt="Instagram" />
                Instagram <br className='block sm:hidden' />
              </div>
            </div>
            <div className='mt-16 pt-16 border-t-2 border-grey-darken font-normal text-left'>
              <p><strong>Twitter to Instagram</strong></p>
              Copy&Paste URL of any Tweets to Moqop and render social media content for Instagram. Keeps your feed consistent with templates.
            </div>
          </a>
        </Link>
      
      </div>
      
      <Footer />
    </section>
  )
}