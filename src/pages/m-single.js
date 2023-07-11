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
        }
      })
    }, [])


  return (
    

                <div className="relative" style={projectData && projectData.size ? projectData.size : {}}>
                  { projectData ?
                      projectData.children.map(function(key, index){
                        return (
                          <Element styles={key.style} id={key.id} key={index} text={key.data && key.data.text ? key.data.text : ''} children={key.children}/>
                        )
                      })
                    : ''
                  }
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

  return (
    props.children ? (
      <>
        <div>
          <div id={props.id} className="block items-center hover:bg-grey/50 py-4 px-8 rounded-2 my-4 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap">
            {props.text}
          </div>
          <div className="ml-8 pl-8 border-l border-grey-darken">

            {
              props.children.map(function(key, index){
                return <MenuItem text={key.name ? key.name : key.id} id={key.id} key={key.id} children={key.children} />
              })
            }
          </div>
        </div>
      </>
    )
    :
    <div id={props.id} className="block items-center hover:bg-grey/50 py-4 px-8 rounded-2 my-4 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap">
      {props.text}
    </div>
   
  )
}

export function Element(props) {

  if (props.styles) {
    var styles = props.styles

    var style = {}
    if (styles) {
      for (const [key, value] of Object.entries(styles)) {
        {style = {...style, [key] : value}}
      }
    }
    
  } else {
    var styles = false
  }

  return (
       props.children ? (
        <div style={style} object-id={props.id}>
          {props.text}
          {
            props.children.map(function(key, index){
              return <Element styles={key.style} id={key.id} key={key.id} text={key.data && key.data.text ? key.data.text : ''} children={key.children}/>
            })
          }
        </div>
       )
      :
        <div style={style} object-id={props.id}>
          {props.text}
        </div>
      
  )

}