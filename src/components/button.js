// https://medium.com/how-to-react/pass-data-or-event-from-a-child-component-to-parent-component-in-both-functional-and-class-ae2f8b7ccda2

import Link from "next/link"

export default function Button(props) {


  var classname = `
    inline-flex rounded-sm px-16 font-medium rounded-4 bg-blue justify-center text-white
    ${props.type === 'secondary' ? 'bg-black' : ''}
    ${props.size === 'small' ? 'py-4 px-16 text-12' : 'py-8'}
    ${props.className}
  `

  if (Boolean(props.href)) {
    return (
      <Link href={props.href ? props.href : '#'}>
        <a className={classname} target={props.target === "_blank" ? '_blank' : ''}>
          {props.text}
        </a>
      </Link>
    )
  } else {
    return (
      <div onClick={props.onChildClick} className={`inline cursor-pointer hover:bg-blue-darken ${classname}`}>
        {props.text}
      </div>
    )
  }

  
}