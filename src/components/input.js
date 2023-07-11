export default function Input(props) {


  return (
    <>
      <input className={`h-48 border-2 border-[#1D9BF0] rounded p-16 ${props.className}`} type={props.type} name={props.name} id={props.name} placeholder={`${props.placeholder}...`} onChange={props.onChange}  />
    </>
  )
}