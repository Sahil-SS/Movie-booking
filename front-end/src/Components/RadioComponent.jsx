import React from 'react'
import '../Css/RadioComponent.css'

const RadioComponent = ({text,changeSelection,data}) =>{
  const handleChecked = (val) =>{
    changeSelection(val);
  }

  return (
    <div name={text} className={`form-check-label ${data === text ? "acive":"inactive"}`} onChange={()=> {handleChecked(text)}}>
      <span className='text'>{text}</span>
    </div>
  )
}
 
export default RadioComponent
