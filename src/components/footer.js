import Link from 'next/link'

export default function Footer() {
  return (
    <section className='mt-32'>
      <div className="flex items-center wrapper h-48 justify-center">
        <h1 className="font-medium">
          <span>
            Made with 
            <img className='inline w-16 m-4' src="./images/love.svg" alt="" />
            by </span>
          <Link href="https://milangladis.com">
            <a target="_blank" className="opacity-50 mr-8 underline">Milan Gladis</a>
          </Link>
        </h1>
      </div>
    </section>
  )
}