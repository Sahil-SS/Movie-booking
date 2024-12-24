import React, { useContext } from "react";
import "../Css/Home.css";
import "../Css/LastBookingDetail.css";
import SelectMovie from "../Components/SelectMovie";
import LastBookingDetail from "../Components/LastBookingDetail";
import TimeSchedule from "../Components/TimeSchedule";
import SelectSeat from "../Components/SelectSeat";
import BsContext from "../context/BsContext";

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeats,
    handlePostBooking,
    handleGetBooking,
    setErorMessage,
    setErrorPopup,

  } = context

  const handleBookNow = () =>{
    if(!movie){
      setErrorPopup(true)
      setErorMessage("Please select a Movie");
    }
    else{
      handlePostBooking();
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_component">
          <SelectMovie />
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetail />
        </div>
      </div>
      <div className="time_seat-container">
        <TimeSchedule />
        <SelectSeat />
        <button className="BN-btn"onClick={()=>{
          handleBookNow()
        }}>Book Now</button>
      </div>
    </div>
  );
};

export default Home;
