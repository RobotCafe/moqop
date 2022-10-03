import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Changelog() {

  var updates = [
    {
      type: 'major',
      date: '03 Oct 2022',
      log: [
        'Render also Instagram Post resolution',
        'Udated watermark',
      ]
    },
    {
      date: '09 Aug 2022',
      log: [
        'New render modal',
        'Link to questionnaire',
      ]
    },
    {
      date: '01 Aug 2022',
      log: [
        'Added loading state with animation',
      ]
    },
    {
      date: '19 Jun 2022',
      log: [
        'Fixed wrong scale of the polyline',
      ]
    },
    {
      date: '4 Jun 2022',
      log: [
        'Added shots counter',
      ]
    },
    {
      date: '1 Jun 2022',
      log: [
        'Fixed missing HD resolution in API request',
      ]
    },
    {
      date: '17 May 2022',
      log: [
        'New blogpost about Design automation',
        'Beta in the logo',
      ]
    },
    {
      date: '14 May 2022',
      log: [
        'Carousel that moves with the scroll',
      ]
    },
    {
      date: '02 May 2022',
      log: [
        'Popup with the image content to download',
      ]
    },
    {
      date: '02 May 2022',
      log: [
        'Added open startup section',
        'Video on the homepage',
      ]
    },
    {
      type: 'major',
      date: '30 April 2022',
      log: [
        'Launched moqop.com 🚀',
        'New homepage and mobile responsivity',
      ]
    },
    {
      date: '26 April 2022',
      log: [
        'Fixed pace calculations', 
        'Fixed not-logged state', 
        'List of generated examples',
        'Pagination',
        'Dynamic pace vs elevation gain'
      ]
    },
    {
      date: '25 April 2022',
      log: [
        'Loading state, Updates log, Improved data structure'
      ]
    },
    {
      date: '24 April 2022',
      log: 'Error handling'
    },
    {
      date: '22 April 2022',
      type: 'major',
      log: 'Released first MVP version to strava.moqop.com 🎉'
    },
    {
      date: '21 April 2022',
      log: [
        'Rendering images with pace instead of elevation gain', 
        'List with activities on homepage', 
        'Rendered polylines'
      ]
    },
    {
      date: '15 April 2022',
      log: 'Finished Strava OAuth'
    },
    {
      date: '04 April 2022',
      log: 'Started with Strava to Instagram story implementation'
    },
    {
      type: 'major',
      date: '25 Sep 2019',
      log: "First Moqop's product was an online 3D templates tool that allowed users to customize 3D devices, or other 3D models and export them as an image."
    }
  ]

  return(
    <section>
      <Head>
        <title>Moqop · Updates</title>
        <meta name="description" content="Check out the latest Moqop release notes" />
      </Head>

      <Header />

      <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
        <span className='titleColor inline'>Updates</span>
      </h1>
      <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Check out latest release notes</div>
      
{/* 
      <div className="rounded border-2 border-grey-darken p-16 mb-24 text-center">
        <h2 className="text-18 font-bold">Updates</h2>
        <p className='mb-0'>Check out latest release notes.</p>
      </div> */}

      
      <div className="sectionBlock">
        {
          updates.map(function(key, index){
            // console.log(key)
            return (
              <div className={`flex flex-col border-b border-grey py-16 leading-8 ${key.type || key.type === 'major' ? 'bg-grey -mx-24 -mt-2 px-24 rounded' : ''} `} key={index}>
                <div className="text-12 text-black/70">{key.date}</div>
                <div>
                  {Array.isArray(key.log) ? (
                    // key.log.forEach(function(element, indexx){
                    key.log.map(function(element, index){
                    // key.log.forEach(element => (
                      console.log(element, index)
                      return (
                        <div className="pb-4" key={index} >{element}</div>
                      )
                    })

                  ) : (
                    `${key.log}`
                  )
                  
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </section>
  )
}