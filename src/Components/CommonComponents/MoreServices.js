import React from 'react'
import TakeOff from "../../Assests/takeOff1.png";
import sheduling from "../../Assests/Seeduling.png";

import "../Material_TakeOff/Material_TakeOff.css";
import { Overlay } from 'antd/es/popconfirm/PurePanel';
import { Link } from 'react-router-dom';

export const MoreServices = (props) => {
  return (
    <div>
       <div className="mt-lg-5 ">
          <div className="row w-100 justify-content-center m-0 mt-2">
            <div className="col-lg-3 col-md-4 col-12 ">
              <div class="card mt-lg-4   mt-3" style={{borderRadius:'10px', overflow:"hidden"}}>
                <img class="card-img-top" src={props.src1} alt="Card image cap" />
                <div class="card-body card-bodyCustom text-center">
                  <h5 class="card-title customTitle">{props.text1}</h5>

                  <Link to={props.link1} class="btn btn-link costumlink">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 " >
              <div class="card mt-lg-4 mt-3" style={{borderRadius:'10px', overflow:"hidden"}}>
                <img
                  class="card-img-top"
                  src={props.scr2}
                  alt="Card image cap"
                />
                <div class="card-body card-bodyCustom text-center">
                  <h5 class="card-title customTitle">{props.text2}</h5>

                  <Link to={props.link2} class="btn btn-link costumlink">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
