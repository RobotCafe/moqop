import Header from 'components/header'
import Footer from 'components/footer'

export default function About() {

  return(
    <section>
      <Header />
      <div className="border-b border-grey-darken text-center pb-16 mb-24">
        <h2 className="text-18 font-bold">About</h2>
        <p className='text-12'>What the ... is moqop?</p>
      </div>
      <p>Welcome human 👋 Good to see you!</p>
      <Footer />
    </section>
  )
}