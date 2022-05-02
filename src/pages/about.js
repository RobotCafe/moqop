import Header from 'components/header'
import Footer from 'components/footer'
import Button from 'components/button'
import Link from 'next/link'

export default function About() {

  return(
    <section>
      <Header />
      <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
        <span className='titleColor inline'>What is Moqop?</span>
      </h1>
      <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Learn more about how Moqop can help you.</div>
      
      {/* <div className="rounded border-2 border-grey-darken p-16 mb-24 text-center">
        <h2 className="text-18 font-bold">What is Moqop?</h2>
        <p className="mb-0">Learn more about how Moqop can help you.</p>
      </div> */}

      <ul className='flex flex-col gap-16'>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>About</span>
          <p className=''>Moqop is online visualiser that generates content based on the specific data input, currently focusing on Strava activities, but it can be extendable by any type of content .</p>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Use-cases</span>
          <ul>
            <li>· Social media</li>
            <li>· Newsletters</li>
            <li>· Website content</li>
            <li>· Digital badges for running events</li>
          </ul>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Pricing</span>
          <p className=''>Pricing depends on your usage of the social media. If your presence on social media brings you any value, you have to use Influencer package.</p>
          <div className="flex flex-col sm:flex-row gap-16 mt-24">
            <div className='flex-1  rounded border border-blue'>
              <div className='flex border-b border-blue/50 py-12 px-16 mb-8 font-bold'>
                <span className=''>Individual</span>
                <div className='ml-auto opacity-50'>Free</div>
              </div>
              <ul className='py-8 px-16'>
                <li>· Watermark</li>
                <li>· Unlimited shots</li>
              </ul>
            </div>
            <div className='flex-1 border border-red  rounded'>
            <div className='flex border-b border-red/50 py-12 px-16 mb-8 font-bold'>
                <span className=''>Influencer</span>
                <div className='ml-auto opacity-50'>$9/m</div>
              </div>
              <div className='pt-8 pb-16 px-16'>
                <ul>
                  <li>· No Moqop branding</li>
                  <li>· Unlimited shots</li>
                </ul>
                <Button text="Request a License" type="" href="mailto:support@moqop.com" className="mt-16 w-full bg-black" />
              </div>
            </div>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Team</span>
          <div className="">
            <p>Moqop is one man show and has been developed by <a href="https://milangladis.com" target="_blank" className="mr-8 text-blue underline">Milan Gladis</a>– Trail runner 🏃 Product Manager, Designer, and Developer with a +15 years of experience in building products.</p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Technology</span>
          <div className="">
            <p>The product is built on nodejs, nextjs, tailwind and uses technologies like firebase, passport, oauth, Strava API etc.</p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Support</span>
          <div className="">
            <p>Feel free to send any issue, feedback, or feature request to <a href="mailto:support@moqop.com" target="_blank" className='text-blue underline'>support@moqop.com</a></p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-bold mb-4 text-16'>Help</span>
          <div className="">
            <p>I would appreciate any kind of your help. It can be testing, feedback or feature request. If you want to contribute on the project, feel free to get in touch 👉 <a href="mailto:support@moqop.com" target="_blank" className='text-blue underline'>support@moqop.com</a></p>
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  )
}