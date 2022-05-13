
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Slider() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
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
        <div className="flex justify-center gap-8 md:gap-16 p-8 outline-hidden h-[400px]" style={{ transform: `translateX(-${scrollY/20}px)` }}>
          <div className='h-[400] aspect-9/16 '><Image src="/images/examples/1.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 '><Image src="/images/examples/2.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 '><Image src="/images/examples/3.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 hidden xs:block'><Image src="/images/examples/4.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 hidden sm:block'><Image src="/images/examples/5.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 hidden md:block'><Image src="/images/examples/1.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 hidden lg:block'><Image src="/images/examples/2.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
          <div className='h-[400] aspect-9/16 hidden lg:block'><Image src="/images/examples/3.jpg" width="225" height="400" className="h-full w-auto rounded flex-1" /></div>
        </div>
      </div>
    </div>

  )
}