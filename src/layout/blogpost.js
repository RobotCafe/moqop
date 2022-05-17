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
        {children}
        <Link href="/blog">
          <a className='block mt-64 border border-grey p-16 bg-grey/50 rounded'>
            <div className="text-center">Back to blogposts</div>

          </a>
        </Link>
      </div>

      <Footer />
    </section>
  )
}

