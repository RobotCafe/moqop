import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Link from 'next/link'
import BlogTitle from 'layout/blogtitle'


export default function BlogPost() {

  return(
    <section>
      
      <Header />

      <div className="page">

        <BlogTitle title="Blog" description="Stories to help you with your design processes automatisation" />

        <div className="mt-32">
          <Link href="/blog/what-is-design-automation">
            <a className='block bg-white border border-grey p-24 rounded shadow-sm hover:shadow-md'>
              <div className="flex">
                <div className="uppercase text-12 pb-4 font-semibold text-blue">Industry</div>
                <div className="uppercase text-12 pb-4 font-semibold flex-1 text-right opacity-50">17 May 2022</div>
              </div>
              <div className="text-16 font-semibold">What is design automation?</div>
              <div className="">Learn more abour how the design automation works and what's the future of generating content based on the data</div>

            </a>
          </Link>
        </div>
      </div>
      <Footer />

    </section>
  )
}