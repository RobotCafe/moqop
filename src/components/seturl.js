export default function Seturl(props) {
  const registerUser = async event => {
    event.preventDefault()
    // console.log(event.target.value)
    const url = event.target.value
    // console.log(url)
    if (url === "") {
      // console.log('load default example')
    } else {

      var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(expression);
      
      if (url.match(regex)) {
        // console.log("valid URL");
        const parsedURL = new URL(url)
        // console.log(parsedURL)
        if (parsedURL.host === 'www.strava.com') {
            // console.log('pass')
            const path = parsedURL.pathname.split('/')
            // console.log(path)
            const activityID = path[path.length - 1];
            // console.log(activityID)
            // console.log(props.onChildChange)
            if (isNumeric(activityID)) {
              // console.log('true')
              props.onChildChange(activityID)
              return activityID
            } else {
              // console.log('not integer')
            }
          } else {
            // console.log('Not valid strava link')
            return
        }
      } else {
        // console.log("No match");
      }

    }
    // const res = await fetch(
    //   'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //   {
    //     body: JSON.stringify({
    //       name: event.target.name.value
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // )

    // const result = await res.json()
    // const result =  res.activityID
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser} className="relative w-full mb-32">
      <label className="hidden" htmlFor="name">Name</label>
      <input onChange={registerUser} className="rounded-4 px-16 py-8 border-2 border-black/50 focus:outline-none focus-visible:border-orange shadow-none w-full ease-in-out" id="stravaLink" name="stravaLink" type="text" autoComplete="stravaLink" placeholder="https://www.strava.com/activities/6871108204"  defaultValue="https://www.strava.com/activities/6871108204"/>
      {/* <button className="absolute inset-y-[4px] right-[4px] rounded-sm px-16 py-8 font-medium rounded-4 text-white bg-orange" type="submit">
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.7929 1.00719C13.1834 0.616663 13.8166 0.616663 14.2071 1.00719L19.2071 6.00719C19.5976 6.39771 19.5976 7.03088 19.2071 7.4214L14.2071 12.4214C13.8166 12.8119 13.1834 12.8119 12.7929 12.4214C12.4024 12.0309 12.4024 11.3977 12.7929 11.0072L16.0858 7.71429H1C0.447715 7.71429 0 7.26658 0 6.71429C0 6.16201 0.447715 5.71429 1 5.71429H16.0858L12.7929 2.4214C12.4024 2.03088 12.4024 1.39771 12.7929 1.00719Z" fill="white"/>
        </svg>
      </button> */}
    </form>
  )
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}