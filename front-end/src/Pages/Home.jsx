import React from "react";
import "../Css/Home.css";
import "../Css/LastBookingDetail.css";
import SelectMovie from "../Components/SelectMovie";
import LastBookingDetail from "../Components/LastBookingDetail";
import TimeSchedule from "../Components/TimeSchedule";
import SelectSeat from "../Components/SelectSeat";

const Home = () => {
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
        <button className="BN-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Home;
