import React from 'react'
import { seats } from '../data'
import '../Css/LastBookingDetail.css'

const LastBookingDetail = () => {
  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
      <div className="seats_container">
        <p className='seats_header'>Seats:</p>
        <ul className='seats'>
          {seats.map((seats,index) =>(
            <li className='seat_value' key={index} >
              {seats} : 0
            </li>
          ))}
        </ul>
      </div>
      <p className='slot' style={{textAlign:"left"}}> Slot: 00:00AM <span></span> </p>
      <p className='movie'>Movie: Movie 1 <sapan></sapan></p>
    </div>
  )
}

export default LastBookingDetail
