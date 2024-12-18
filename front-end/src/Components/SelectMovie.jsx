import React from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'

const SelectMovie = () => {
  return (
    <>
    <h1 className='SM_heading'>Select a Movie:-</h1>
    <div className="SM_main_container">
      {moviesList.map((el,index) =>{
        return(
          <RadioComponent text={el} value={index} />
        )
      })}
    </div>
    </>
  )
}

export default SelectMovie
