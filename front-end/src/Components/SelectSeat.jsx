import React from 'react'
import { seats } from '../data'
import '../Css/SelectSeat.css'
import SeatsInput from './SeatsInput'

const SelectSeat = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seat:-</h1>
      <div className="SS_main_container">
        {seats.map((el,index) =>{
          return(
            <SeatsInput text={el} key={index} />
          )
        })}
      </div> 
    </div>
  )
}

export default SelectSeat
