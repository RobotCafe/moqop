import Header from 'components/header'
import Footer from 'components/footer'

export default function Changelog() {

  var updates = [
    {
      date: '04/26/2022',
      log: [
        'Fixed pace calculations', 
        'Fixed not-logged state', 
        'List of generated examples',
        'Pagination',
        'Dynamic pace vs elevation gain'
      ]
    },
    {
      date: '04/25/2022',
      log: [
        'Loading state, Updates log, Improved data structure'
      ]
    },
    {
      date: '04/24/2022',
      log: 'Error handling'
    },
    {
      date: '04/22/2022',
      log: 'Released first MVP version to strava.moqop.com 🎉'
    },
    {
      date: '04/21/2022',
      log: [
        'Finished Strava OAuth', 
        'Rendering images with pace instead of elevation gain', 
        'List with activities on homepage', 
        'Rendered polylines'
      ]
    },
    {
      date: '04/15/2022',
      log: 'Finished Strava OAuth'
    }
  ]

  return(
    <section>
      <Header />
      <div className="border-b border-grey-darken text-center pb-16 mb-24">
        <h2 className="text-18 font-bold">Updates</h2>
        <p className='text-12'>Check out latest release notes.</p>
      </div>

      {/* var result = objArray.map(function(a) {return a.foo;}); */}
      {
        updates.map(function(key, index){
          // console.log(key)
          return (
            <div className="flex flex-col border-b border-grey py-16 leading-8" key={index}>
              {/* <div className="text-12 text-black/70">{key.date}</div> */}
              <div>
                {Array.isArray(key.log) ? (
                  // key.log.forEach(function(element, indexx){
                  key.log.map(function(element, index){
                  // key.log.forEach(element => (
                    console.log(element, index)
                    return (
                      <div className="" key={index} >– {element}</div>
                    )
                  })

                ) : (
                  `- ${key.log}`
                )
                
                }
              </div>
            </div>
          )
        })
      }
      <Footer />
    </section>
  )
}