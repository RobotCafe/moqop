import Head from 'next/head'

export default function blogTitle(props) {
  return (
    <>
      <Head>
        <title>{props.title} · Moqop</title>
        <meta name="description" content={props.description} />
      </Head>

      <div className="flex">
        <div className="uppercase text-12 pb-4 font-semibold text-blue">Industry</div>
        <div className="uppercase text-12 pb-4 font-semibold flex-1 text-right opacity-50">17 May 2022</div>
      </div>
      <h1 className="title text-24 sm:text-32 md:text-40 font-black">
        <span className=''>{props.title}</span>
      </h1>
      <div className='text-16 opacity-50 mt-8 mb-32 leading-10'>
        {props.description}
      </div>
    </>
  )
}