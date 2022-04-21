import Button from 'components/button'

export default function Integration(props) {
  console.log(props.loginButton)
  return(
    <div className="bg-black rounded p-24 flex justify-center text-white flex-col mt-48 mb-24 text-center">
      <div className="flex gap-16 justify-center items-center">
        <img src="/images/strava.svg" alt="Strava" />
        <span className='text-white/50'>to</span>
        <img src="/images/instagram.svg" alt="Instagram" />
      </div>
      {props.loginButton ? 
        <div>
          <p className="mt-8">
            Generate fancy Instagram story&nbsp;
            <br className="xs:block hidden" />
            from your Strava activity
          </p>
          <Button text="Log in with Strava" href="/auth/strava" className="mt-16 bg-orange" />
        </div>
      : 
      '' }
      {/* <Button text="Log in with Strava" href="https://www.strava.com/oauth/authorize?client_id=80214&redirect_uri=http://localhost:8000/api/cookie/set&response_type=code&scope=activity:read_all" className="mt-16 bg-orange" /> */}
    </div>
  )
}