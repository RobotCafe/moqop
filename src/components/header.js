import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from 'components/button'
export default function Header() {

  // const router = useRouter()
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push(href, undefined, { shallow: true })

  //   // router.push(href)
  // }

  return (
    <div className="flex items-center wrapper h-64 mb-24">
      <h1 className="font-medium">
        <Link href="/" as={`/`}>
          <a className="mr-8"   >moqop</a>
        </Link>
        {/* <span className="opacity-50 mr-8">/</span> */}
      </h1>
      {/* <Button text="Send feedback" size="small" type="secondary" className="ml-auto" /> */}
      
      <div className="ml-auto">
        <Link href="/about">
          <a className="ml-auto">About</a>
        </Link>
      </div>
      {/* <Button href="mailto:hello@milangladis.com" target="_blank" text="Send feedback" size="small" type="secondary" className="" /> */}
    </div>
  )
}