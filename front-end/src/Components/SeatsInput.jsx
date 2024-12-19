import React from 'react'
import '../Css/SeatsInput.css'

const SeatsInput = ({text,key}) => {
  return (
    <div className='form-check-label'>
      <span className="text">{text}</span>
      <input type="number" className='seat-input' placeholder='0' max='30' min='0' />
    </div>
  )
}

export default SeatsInput
