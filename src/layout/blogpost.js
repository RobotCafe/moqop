import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Link from 'next/link'
import BlogTitle from 'layout/blogtitle'

export default function BlogPost({ children }) {

  return(
    <section>

      <Header />
      
      <div className="page">
        <div className="sectionBlog">
          {children}
          <Link href="/blog">
            <a className='block mt-64 border border-grey p-8 bg-grey/50 rounded'>
              <div className="text-center text-16">Back to blogposts</div>

            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  )
}

