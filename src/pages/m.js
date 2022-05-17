import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from 'react'

export default function Workspage() {

  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`/api/project`)
      .then(res => res.json())
      .then(data => {
        if(data) {
          setProjectData(data)
          // console.log(data)
          console.log(data.size)
          
        }
      })
    }, [])
  console.log(projectData)


  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden text-13">
      <div className="w-full px-12 py-12 border-b border-grey-darken">
        <div className="mr-8 flex">
          <Link href="/workspace" >
            <a className="block -mt-2 h-[28px]">
              <Image src="/images/logo.svg" width="77" height="28" className='block' />
            </a>
          </Link>
          <div className="ml-16 border-l border-grey-darken pl-8">
          {
            projectData ? 
            <span className="block h-24 px-8">{projectData.name}</span>
          : ''}
          </div>
        </div>
      </div> 
      <div className="flex flex-1">
        <div className="i-sidebar w-[250px] h-full border-r border-grey-darken py-24 px-16">
          
          <MenuTitle text="Objects"/>
          
          { projectData ?
              projectData.objects.map(function(key, index){
                return (
                  <div key={index}>
                    {/* {key.name} */}
                    <MenuItem text={key.name} />
                    {/* {console.log(key.name)} */}
                  </div>
                )
              })
            : ''
          }
          
        </div>
        <div className="i-content relative flex-1 h-full overflow-auto bg-grey">
          
          <div className="relative" style={projectData && projectData.size ? projectData.size : {}}>
            { projectData ?
                projectData.objects.map(function(key, index){
                  return (
                    <Element styles={key.style} key={index} text={key.name} />
                  )
                })
              : ''
            }
          </div>
        </div>
        
        <div className="i-properties w-[250px] h-full border-r border-grey-darken py-24 px-16">
        
        </div>
      </div>
    </div>
  )
}

export function Card(props) {
  return(
    <Link href="/m">
      <a className="">
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
    <div className="flex items-center hover:bg-grey/50 p-8 rounded">
      <div className="block w-20 h-20 bg-grey-darken mr-8 rounded-2"></div>
      {props.text}
    </div>
  )
}

export function Element(props) {
  var styles = props.styles
  // var styling = `
  var style = {}
  {styles.t ? style = {...style,"top": styles.t}: ''}
  {styles.r ? style = {...style,"right": styles.r}: ''}
  {styles.b ? style = {...style,"bottom": styles.b}: ''}
  {styles.l ? style = {...style,"left": styles.l}: ''}
  {styles.position ? style = {...style,"position": styles.position}: ''}
  {styles.z ? style = {...style,"z-index": styles.z}: ''}
  {styles.bg ? style = {...style,"background": styles.bg}: ''}

  console.log(style)
  return (
    <div style={style}>
      {props.text}
    </div>
  )
}


// export function Element(props) {
//   var styles = props.styles
//   var classes = `
//     ${styles.t ? `t-${styles.t}px` : ''}
//     ${styles.r ? `r-${styles.r}` : ''}
//     ${styles.b ? `b-${styles.b}` : ''}
//     ${styles.l ? `l-${styles.l}` : ''}
//     ${styles.position ? `position-${styles.position}` : ''}
//     ${styles.z ? `z-${styles.z}` : ''}
//     ${styles.bg ? `bg-${styles.bg}` : ''}
//   `
//   console.log(classes)
//   return (
//     <div className=""={{classes}}>
//       {props.text}
//     </div>
//   )
// }