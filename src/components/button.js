// https://medium.com/how-to-react/pass-data-or-event-from-a-child-component-to-parent-component-in-both-functional-and-class-ae2f8b7ccda2

import Link from "next/link"

export default function Button(props) {


  var classes = `
    inline-flex rounded-sm px-16 font-medium rounded-4 bg-blue justify-center text-white whitespace-nowrap
    ${props.type === 'secondary' ? 'bg-black' : ''}
    ${props.size === 'small' ? 'py-4 px-16 text-12' : 'py-8'}
    ${props.size === 'large' ? 'py-12 px-24 text-14 font-semibold rounded-8' : 'py-8'}
    ${props.className}
  `

  if (Boolean(props.href)) {
    return (
      <Link href={props.href ? props.href : '#'} target={props.target ? '_blank' : ''}>
        <a className={classes}>
          {props.text}
        </a>
      </Link>
    )
  } else {
    if (props.type === "button") {
      return (
        <button onClick={props.onChildClick} className={`inline cursor-pointer hover:bg-blue-darken ${classes}`}>
          {props.text}
        </button>
      )
    } else {
      return (
        <div onClick={props.onChildClick} className={`inline cursor-pointer hover:bg-blue-darken ${classes}`}>
          {props.text}
        </div>
      )
    }
  }

  
}