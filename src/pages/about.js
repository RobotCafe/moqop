import Header from 'components/header'
import Footer from 'components/footer'
import Button from 'components/button'

export default function About() {

  return(
    <section>
      <Header />
      <div className="border-b border-grey-darken pb-16 mb-24 text-center">
        <h2 className="text-18 font-bold">About</h2>
        <p >Learn more about how Moqop can help you.</p>
      </div>

      <ul className='flex flex-col gap-16'>
        <li className='mb-16'>
          <span className='block font-semibold mb-8'>What is Moqop?</span>
          <p className=''>Moqop is online visualiser that generates content based on the specific input.</p>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-8'>How much it cost?</span>
          <p className=''>Pricing depends on your usage of the social media.</p>
          <div className="flex gap-16 mt-24">
            <p className='flex-1 rounded border border-grey p-16'>
              <div className='flex border-b border-grey pb-8 mb-8 font-semibold'>
                🏃 Individual
                <div className='ml-auto'>Free</div>
              </div>
              <ul>
                <li>- Watermark</li>
                <li>- 15 each month</li>
              </ul>
            </p>
            <p className='flex-1 rounded border border-grey p-16'>
              <div className='flex border-b border-grey pb-8 mb-8 font-semibold'>
                🏃‍♀️ Influencer
                <div className='ml-auto'>Paid</div>
              </div>
              <ul>
                <li>- No branding</li>
                <li>- Unlimited</li>
              </ul>
              <Button text="Request License" href="mailto:hello@milangladis.com" className="mt-8 w-full" />
            </p>
          </div>
        </li>
        <li className='mb-16'>
          <span className='block font-semibold mb-8'>Can I support development?</span>
          <div className="">
            <p>Yes! We would appreciate any kind of your support. It can be testing, feedback or feature request. You can also support development on the Patreon 👇</p>
              <Button text="Support on Patreon" href="#" className="mt-8 w-full" />
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  )
}