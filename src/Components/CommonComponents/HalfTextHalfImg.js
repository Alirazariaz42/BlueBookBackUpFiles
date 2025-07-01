import React from 'react'
import "../Material_TakeOff/Material_TakeOff.css";

export const HalfTextHalfImg = (props) => {
  return (
    <>
    <div className='row w-100 p-lg-4 p-md-4 p-2 m-0' style={{display:"flex", alignItems:"center"}}>
        <div className='col-lg-6 col-12'>
            <p className='FontSize' style={{textAlign:"justify"}}>{props.text}</p>
        </div>

        <div className='col-lg-6 col-12 text-center'>
            <img src={props.scr} alt='image' className='imageSize'/>
            </div>
    </div>
    
    </>
  )
}
