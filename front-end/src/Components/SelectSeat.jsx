import React, { useContext } from 'react'
import { seats } from '../data'
import '../Css/SelectSeat.css'
import SeatsInput from './SeatsInput'
import BsContext from '../context/BsContext'

const SelectSeat = () => {

  const context = useContext(BsContext);

  const {noOfSeats,changeNoOfSeats} = context;
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seat:-</h1>
      <div className="SS_main_container">
        {seats.map((el,index) =>{
          return(
            <SeatsInput text={el} key={index} noOfSeats={noOfSeats} changeNoOfSeats={changeNoOfSeats}/>
          )
        })}
      </div> 
    </div>
  )
}

export default SelectSeat
