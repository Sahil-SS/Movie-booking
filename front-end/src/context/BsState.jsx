import { useState } from "react";
import BsContext from "./BsContext";


const BsState = (props) =>{
    const [movie,changeMovie] = useState('');
    const [time,changeTime] = useState('');
    const [noOfSeats,changeNoOfSeats] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:"",
    });
    const [lastBookingDetail,setLastBookingDetail] = useState(null);
    return(
        <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetail
        }}>{props.children}</BsContext.Provider>
    )
}

export default BsState;