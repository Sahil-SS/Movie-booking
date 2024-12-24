import React, { useContext, useEffect } from "react";
import { seats } from "../data";
import "../Css/LastBookingDetail.css";
import BsContext from "../context/BsContext";

const LastBookingDetail = () => {
  const context = useContext(BsContext);

  const { lastBookingDetail, handleGetBooking } = context;

  useEffect(() => {
    handleGetBooking();
  }, []);
  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking :</h2>
      {lastBookingDetail ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seats, index) => (
                <li className="seat_value" key={index}>
                  {seats} : {Number(lastBookingDetail.seats[seats])}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            {" "}
            Slot: <span>{lastBookingDetail.slot}</span>{" "}
          </p>
          <p className="movie">
            Movie: <sapan>{lastBookingDetail.movie}</sapan>
          </p>
        </>
      ) : (
        <p className="no_previous">No Previous Booking</p>
      )}
    </div>
  );
};

export default LastBookingDetail;
