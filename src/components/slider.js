
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Slider() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      setScrollY(window.scrollY);
    };
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <div className="mt-48">
      <div className="relative max-w-full overflow-hidden no-scrollbar">
        <div className="flex justify-center gap-8 md:gap-16 p-8 outline-hidden w-full">
          <div className='h-[400] '><Image src="/images/examples/1.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" alt="Example" /></div>
          <div className='h-[400] '><Image src="/images/examples/2.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" alt="Example" /></div>
          <div className='h-[400]'><Image src="/images/examples/3.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" alt="Example" /></div>
          <div className='h-[400] hidden sm:block'><Image src="/images/examples/4.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" alt="Example" /></div>
          {/* <div className='h-[400] hidden sm:block'><Image src="/images/examples/5.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
          <div className='h-[400] hidden md:block'><Image src="/images/examples/1.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
          <div className='h-[400] hidden lg:block'><Image src="/images/examples/2.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div>
          <div className='h-[400] hidden lg:block'><Image src="/images/examples/3.jpg" width="225" height="400" className="rounded w-[225px] h-[400]" /></div> */}
        </div>
      </div>
    </div>

  )
}