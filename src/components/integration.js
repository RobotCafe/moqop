import Button from 'components/button'
import Image from 'next/image'

export default function Integration(props) {
  // console.log(props.loginButton)
  return(
    <div className="sectionBlock flex flex-col border-2 border-grey rounded-8 p-16 mb-24 text-center font-semibold">
      <div className="flex gap-16 justify-center items-center p-8">
        <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-8">
          <Image src="/images/services/strava.svg" width="24" height="24" alt="Strava" />
          Strava <br className='block sm:hidden' /> Activity
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
      {props.loginButton ? 
        <div className='mt-8 border-grey'>
          <Button text="Connect with Strava" size="large" href="/auth/strava" className="mt-8 bg-orange w-full" />
        </div>
      : 
      '' }
    </div>
  )
}