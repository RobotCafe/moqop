import Header from 'components/header'

export default function Changelog() {

  var updates = [
    {
      date: '04/25/2022',
      log: [
        'Loading state, Updates log, Improved data structure',
        ''
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
      date: '04/15/2022',
      log: 'Finished Strava OAuth'
    }
  ]

  return(
    <section>
      <Header />
      <div className="bg-black rounded p-24 flex justify-center text-white flex-col mt-48 mb-24 text-center">
        Updates
      </div>
      {/* var result = objArray.map(function(a) {return a.foo;}); */}
      {
        updates.map(function(key, index){
          // console.log(key)
          return (
            <div className="flex flex-col border-b border-grey py-16 leading-8" key={index}>
              <div className="text-12 text-black/70">{key.date}</div>
              <div>· {key.log}</div>
            </div>
          )
        })
      }
    </section>
  )
}