import Button from 'components/button'
import Image from 'next/image'

export default function Integration(props) {
  // console.log(props.loginButton)
  return(
    <div className="flex flex-col border border-grey-darken rounded p-16 mb-24 text-center">
      <div className="flex gap-16 justify-center items-center">
        <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-8">
          <Image src="/images/services/strava.svg" width="24" height="24" alt="Strava" />
          Strava Activity
        </div>
        <span className='text-white/50'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M4.5 12H19.5M19.5 12L15.5 8M19.5 12L15.5 16" stroke="#38424B" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <div className="flex flex-1 flex-col sm:flex-row  items-center justify-center gap-8">
          <Image src="/images/services/instagram.svg" width="24" height="24" alt="Instagram" />
          Instagram Story
        </div>
      </div>
      {props.loginButton ? 
        <div className='mt-16 pt-8 border-t border-grey-darken'>
          <p className="mt-8">Visualise your strava activity as Instagram story with a decent polyline above the picture you made during the workout.</p>
          <Button text="Log in with Strava" href="/auth/strava" className="mt-8 bg-orange w-full" />
        </div>
      : 
      '' }
      {/* <Button text="Log in with Strava" href="https://www.strava.com/oauth/authorize?client_id=80214&redirect_uri=http://localhost:8000/api/cookie/set&response_type=code&scope=activity:read_all" className="mt-16 bg-orange" /> */}
    </div>
  )
}