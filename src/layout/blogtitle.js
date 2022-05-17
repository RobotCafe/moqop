import Head from 'next/head'

export default function blogTitle(props) {
  return (
    <>
      <Head>
        <title>{props.title} · Moqop</title>
        <meta name="description" content={props.description} />
      </Head>

      <h1 className="title text-24 sm:text-32 md:text-40 font-black text-center">
        <span className='titleColor inline'>{props.title}</span>
      </h1>
      <div className='text-16 md:text-18 md:w-2/3 text-center mt-8 mx-auto mb-32 font-semibold'>
        {props.description}
      </div>
    </>
  )
}