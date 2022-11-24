import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Button from 'components/button'
export default function Header(props) {


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
          <a className="mr-8 -mt-4 flex">
            <Image src="/images/logo.svg" width="77" height="28" className='block' />
          </a>
        </Link>
      </h1>
      {/* <Button text="Send feedback" size="small" className="ml-16" /> */}
      
      <div className="ml-auto font-semibold">
        <Link href="/apps">
          <a className="ml-32 mr-16">Apps</a>
        </Link>
        ·
        <Link href="/about">
          <a className="ml-16">About</a>
        </Link>
        {
          props.user && props.user.code === 200 ? 
            <div className="inline ml-16">
              ·
              <Link href="/logout">
                <a className="ml-18">Log out</a>
              </Link> 
            </div>
            : ''
        }
      </div>
      {/* <Button href="mailto:hello@milangladis.com" target="_blank" text="Send feedback" size="small" type="secondary" className="" /> */}
    </div>
  )
}