import Canvas from 'components/canvas'
import {toFixedIfNecessary, formatSeconds} from 'utils/functions'

export default function Theme(activityData) {
  console.log(activityData)
  // console.log(activityData.map.polyline)
  
  return (

    <div className="relative">

      {/* <img className='absolute z-20 opacity-30' src="./images/header.svg" alt="" />

      <div className="relative h-full rounded overflow-hidden aspect-[0.5625]">
        <div className='absolute  z-20 h-full w-full flex flex-col text-white'>
          <div className='m-24'>{activityData.name}</div>
          <div className="flex items-end flex-1 w-full justify-center gap-32 mb-80">
            <div className=''>
              <span className='block text-14 text-white/80'>{activityData.type}</span>
              <div className='text-20 font-semibold'>
                {toFixedIfNecessary(activityData.distance/1000, 2)} km
              </div>
            </div>
            <div className=''>
              <span className='block text-14 text-white/80'>Elev. Gain</span>
              <div className='text-20 font-semibold'>
                {activityData.total_elevation_gain} m
              </div>
            </div>
            <div className=''>
              <span className='block text-14 text-white/80'>Time</span>
              <div className='text-20 font-semibold'>
                {formatSeconds(activityData.moving_time)}
              </div>
            </div>
          </div>
        </div>
        
        <Canvas polyline={activityData.map.polyline} className="absolute z-20 h-full w-full scale-[.8]" width="1080" height="1920" />
        <Canvas className="absolute z-20 h-full w-full scale-[.8]" width="1080" height="1920" />

        <div className="absolute z-10 top-0 h-full l-0 w-full bg-gradient-to-b from-[#243c5a]/10 to-[#243c5a]/50"></div>

        <img className='block absolute z-0 top-0 h-full aspect-video' src={activityData.photos.primary.urls[600]}/>
      </div> */}
      commented canvas
    </div>
  )
}