import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Link from 'next/link'

export default function BlogPost() {

  return(
    <section>
      
      <Header />

      <div className="page">

      <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
          <span className='inline'>Blog</span>
        </h1>
        <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>Moqop is a part of open-startup movement. <br className='hidden sm:block' />Stories to help you with your design processes automatisation</div>

        <div className="sectionBlock mt-32">
          <Link href="/blog/what-is-design-automation">
            <a className='block bg-white border border-grey p-24 rounded shadow-sm hover:shadow-md'>
              <div className="flex">
                <div className="uppercase text-12 pb-4 font-semibold text-blue">Industry</div>
                <div className="uppercase text-12 pb-4 font-semibold flex-1 text-right opacity-50">17 May 2022</div>
              </div>
              <div className="text-18 font-bold mb-8">What is design automation?</div>
              <div className="">Learn more abour how the design automation works and what's the future of generating content based on the data</div>

            </a>
          </Link>
        </div>
      </div>
      <Footer />

    </section>
  )
}