import Link from 'next/link'
import Button from 'components/button'
export default function Header() {
  return (
    <section className='mb-32'>
      <div className="flex items-center wrapper border-b border-solid border-grey h-48">
        <h1 className="font-medium">
          <Link href="https://mokop.io">
            <a target="_blank" className=" mr-8">Mokop.io</a>
          </Link>
          {/* <span className="opacity-50 mr-8">/</span> */}
        </h1>
        <Button text="Send feedback" size="small" type="secondary" className="ml-auto" />
      </div>
    </section>
  )
}