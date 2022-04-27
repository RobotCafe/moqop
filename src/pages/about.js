import Header from 'components/header'
import Footer from 'components/footer'
import Button from 'components/button'
import Link from 'next/link'

export default function About() {

  return(
    <section>
      <Header />
      <div className="border-b border-grey-darken pb-16 mb-24 text-center">
        <h2 className="text-18 font-bold">What is Moqop?</h2>
        <p >Learn more about how Moqop can help you.</p>
      </div>

      <ul className='flex flex-col gap-16'>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>About</span>
          <p className=''>Moqop is online visualiser that generates content based on the specific input.</p>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Use-cases</span>
          <ul>
            <li>- Social media</li>
            <li>- Newsletters</li>
            <li>- Website content</li>
          </ul>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Pricing</span>
          <p className=''>Pricing depends on your usage of the social media. If your presence on social media brings you any value, you have to use Influencer package.</p>
          <div className="flex flex-col sm:flex-row gap-16 mt-24">
            <div className='flex-1 rounded border border-grey p-16'>
              <div className='flex border-b border-grey pb-8 mb-8 font-semibold'>
                Individual 🏃
                <div className='ml-auto opacity-50'>Free</div>
              </div>
              <ul>
                <li>- Watermark</li>
                <li>- 15 each month</li>
              </ul>
            </div>
            <div className='flex-1 rounded border border-grey p-16'>
              <div className='flex border-b border-grey pb-8 mb-8 font-semibold'>
                Influencer 🏃‍♀️
                <div className='ml-auto opacity-50'>Paid</div>
              </div>
              <ul>
                <li>- No branding</li>
                <li>- Unlimited</li>
              </ul>
              <Button text="Request License" type="secondary" href="mailto:hello@milangladis.com" className="mt-16 w-full" />
            </div>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Team</span>
          <div className="">
            <p>Moqop is one man show and has been developed by <a href="https://milangladis.com" target="_blank" className="mr-8 text-blue underline">Milan Gladis</a> – Trail runner 🏃 and a Product Manager, Designer, Developer with a +15 years of experience in building products.</p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Technology</span>
          <div className="">
            <p>The product is built on nodejs, nextjs, tailwind and uses technologies like firebase, passport, OAuth, etc.</p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Support</span>
          <div className="">
            <p>Feel free to send any issue, feedback, or feature request to <a href="mailto:support@moqop.com" target="_blank" className='text-blue underline'>support@moqop.com</a></p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-4 text-16'>Help</span>
          <div className="">
            <p>I would appreciate any kind of your help. It can be testing, feedback or feature request. You can also support development on the Patreon 👇</p>
              <Button text="Support on Patreon" type="secondary" href="https://www.patreon.com/milangladis" target="_blank" className="mt-8 w-full" />
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  )
}