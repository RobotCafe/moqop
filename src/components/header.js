import Link from 'next/link'

export default function Header() {
  return (
    <section className='mb-32'>
      <div className="flex items-center wrapper border-b border-solid border-grey h-48">
        <h1 className="font-medium">
          <Link href="https://moqop.com">
            <a target="_blank" className="opacity-50 mr-8">Mokop.io</a>
          </Link>
          <span className="opacity-50 mr-8">/</span>
          <span>Strava → Instagram story</span>
        </h1>
      </div>
    </section>
  )
}