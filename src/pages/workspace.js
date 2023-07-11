import Image from "next/image"
import Link from "next/link"

export default function Workspage() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden text-13">
      <div className="w-full px-12 py-12 border-b border-grey-darken">
        <div className="mr-8 flex">
          <Link href="/workspace">
            <a className="block -mt-2 h-[28px]">
              <Image src="/images/logo.svg" width="77" height="28" className='block' alt="logo" />
            </a>
          </Link>
        </div>
      </div> 
      <div className="flex flex-1">
        <div className="i-sidebar w-[250px] h-full border-r border-grey-darken py-24 px-16">
          
          <MenuTitle text="Workspace"/>
          <MenuItem text="My projects" href="#" />
          
          <MenuTitle text="Community"/>
          <MenuItem text="Templates" href="#" />

          <MenuTitle text="User"/>
          <MenuItem text="Settings" href="#" />
        </div>
        <div className="i-content flex-1 h-full overflow-auto bg-grey/5">
          <div className="grid grid-cols-5 grid-rows-4  gap-24 p-32">
            <Card title="My first project" />
            <Card title="Strava activity" />
            <Card title="Ads generator" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Card(props) {
  return(
    <Link href="/m">
      <a>
        <div className="bg-grey-darken w-full aspect-4/3 rounded"></div>
        <div className="py-8">{props.title}</div>
      </a>
    </Link>
  )
}


export function MenuTitle(props) {
  return (
    <div className="mt-16 text-11 uppercase font-semibold opacity-50 px-8">{props.text}</div>
  )
}

export function MenuItem(props) {
  return(
    <Link href={props.href}>
      <a className="flex items-center hover:bg-grey/50 p-8 rounded">
        <div className="block w-20 h-20 bg-grey-darken mr-8 rounded-2"></div>
        {props.text}
      </a>
    </Link>
  )
}