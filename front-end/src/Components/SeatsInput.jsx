import React from 'react'
import '../Css/SeatsInput.css'

const SeatsInput = ({text,key,noOfSeats,changeNoOfSeats}) => {
  const change_seat =(e)=>{
    const update ={...noOfSeats,[e.target.name]:Number(e.target.value)};
    changeNoOfSeats(update);

    window.localStorage.setItem("Seats",
      JSON.stringify({
        ...noOfSeats,
        [e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div className='form-check-label'>
      <span className="text">{text}</span>
      <input type="number" className='seat-input' placeholder='0' max='30' min='0' name={text} onChange={change_seat}
       value={noOfSeats[text]}/>
    </div>
  )
}

export default SeatsInput
