import React from 'react';
import './commonComponentstyle.css';
export const Card = (props) => {
  return (
    <div>
          <div className="CardContainer text-center">
              <div className="cardImgcontainer">
                <img src={props.img} alt='Img'/>
              </div>
              <div className="CardText">
                <h5 className='cardTitle'>
                
                    {props.title}
                   
                </h5>
                <p>
                  {props.text}
                </p>
              </div>
            </div>
    </div>
  )
}
