import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Button from 'components/button'
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
        <title>Moqop · What is moqop?</title>
        <meta name="description" content="Moqop is online visualiser that generates content based on the specific data input, currently focusing on Strava activities, but it can be extendable by any type of content." />
      </Head>

      <Header user={userData} />

      <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
        <span className='titleColor inline'>What is Moqop?</span>
      </h1>
      <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Learn more about how Moqop can help you.</div>
      
      {/* <div className="rounded border-2 border-grey-darken p-16 mb-24 text-center">
        <h2 className="text-18 font-bold">What is Moqop?</h2>
        <p className="mb-0">Learn more about how Moqop can help you.</p>
      </div> */}

      <div className="sectionBlog">

        <ul className='flex flex-col gap-16'>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>About product</span>
            <p className=''>Moqop generates visual content based on various data inputs, currently focusing on Strava activities with a plan to cover other services and integrations, but also include AI in the design process.</p>
          </li>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Use-cases</span>
            <p>Currently, we perfectly cover Strava to Instagram content creation that keeps the feed consistent. </p>
          </li>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Design export</span>
            <ul>
              <li>· Instagram Story in 9:16 ration format</li>
              <li>· Instagram Post in 1:1 ratio format</li>
            </ul>
          </li>
          <li className='bg-grey h-2 mb-16' />
          {/* <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Pricing</span>
            <p className=''>Pricing depends on your usage of the social media. If your presence on social media brings you any value, you have to use Influencer package.</p>
            <div className="flex flex-col sm:flex-row gap-16 mt-24">
              <div className='relative flex-1  rounded border border-red'>
                <div className="absolute -top-12 bg-white left-1/2 -translate-x-1/2 whitespace-nowrap px-8 text-red text-12">Hobby</div>
                <div className='flex border-b border-red/50 py-12 px-16 mb-8 text-red'>
                  <span className=' font-bold'>Individual</span>
                  <div className='ml-auto'>Free forever</div>
                </div>
                <ul className='py-8 px-16'>
                  <li>· Watermark</li>
                  <li>· Unlimited shots</li>
                </ul>
              </div>
              <div className='relative flex-1 border border-blue  rounded'>
                <div className="absolute -top-12 bg-white left-1/2 -translate-x-1/2 whitespace-nowrap px-8 text-blue text-12">Professional</div>
                <div className='flex border-b border-blue/50 py-12 px-16 mb-8 text-blue'>
                  <span className='font-bold'>
                    Influencer
                  </span>
                  <div className='ml-auto'>$49 monthly</div>
                </div>
                <div className='pt-8 pb-16 px-16'>
                  <ul>
                    <li>· No Moqop branding</li>
                    <li>· Unlimited shots</li>
                  </ul>
                  <Button text="Request a License" type="" href="mailto:support@moqop.com" className="mt-16 w-full" />
                </div>
              </div>
            </div>
          </li> */}
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Team</span>
            <div className="">
              <p>One-man show project developed by <a href="https://milangladis.com" target="_blank" className="mr-8 text-blue underline">Milan Gladis</a>– Full Stack Product Designer and Trail runner 🏃 with a +15 years of experience in building web products.</p>
            </div>
          </li>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Open Startup</span>
            <div className="">
              <p>We embrace transparency and openness by sharing our metrics with everyone. Check out our current metrics on the <Link href="open-startup" className='text-blue underline'>Open Startup</Link> page</p>
            </div>
          </li>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Technology</span>
            <div className="">
              <p>The product is built on Node.js, Next.js, Tailwind CSS and uses technologies like Google Firebase, Passport, OAuth, Strava API etc.</p>
            </div>
          </li>
          <li className='bg-grey h-2 mb-16' />
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Support</span>
            <div className="">
              <p>Feel free to send any issue, feedback, or feature request to <a href="mailto:support@moqop.com" target="_blank" className='text-blue underline'>support@moqop.com</a></p>
            </div>
          </li>
          <li className='mb-16'>
            <span className='block font-bold mb-4 text-20'>Help</span>
            <div className="">
              <p>I would appreciate any kind of your help. It can be testing, feedback or feature request. If you want to contribute on the project, feel free to get in touch 👉 <a href="mailto:support@moqop.com" target="_blank" className='text-blue underline'>support@moqop.com</a></p>
            </div>
          </li>
        </ul>
        </div>
      <Footer />
    </section>
  )
}