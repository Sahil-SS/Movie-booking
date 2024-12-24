import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) =>{
    const [errorPopup,setErrorPopup] = useState(false);
    const [errorMessage,setErorMessage] = useState("");
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
    
    const handlePostBooking = async() =>{
        const response = await fetch(`https://localhost:8080/api/booking`,{
            method:"Post",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({movie:movie,slots:time,seats:noOfSeats}),
        })

        const data = await response.json();
        setErrorPopup(true)
        setErorMessage(data.message)
        
        if(response.status === 200){
            changeTime("")
            changeMovie("")

            setLastBookingDetail(data.data)
            window.localStorage.clear();
        }
    }

    const handleGetBooking = async() =>{
        const response = await fetch(`https://localhost:8080/api/booking`,{
            method:"Get",
            
        })

        const data = await response.json()
        setLastBookingDetail(data.data)
    }

    useEffect(() =>{
        const movie = window.localStorage.getItem("movie");
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"));

        if(movie){
            changeMovie(movie);
        }
        if(slot){
            changeTime(slot);
        }
        if(seats){
            changeNoOfSeats(seats);
        }
    },[])
    return(
        <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetail,
        handleGetBooking,handlePostBooking,errorMessage,errorPopup,setErorMessage,setErrorPopup
        }}>{props.children}</BsContext.Provider>
    )
}

export default BsState;