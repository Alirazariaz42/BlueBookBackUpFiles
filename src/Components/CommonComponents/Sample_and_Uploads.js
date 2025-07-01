import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlueUploadModal from "./BlueUploadModal/BlueUploadModal";

export const Sample_and_Uploads = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const ChangeModelState = ()=>{
  
      setIsModalOpen(!isModalOpen)
    }
  return (
    <div>
      <div className="container Sample_and_Uploads mt-md-5 mt-4 mb-md-5 mb-4"  >
        <div>
           <Link to='/work-samples/' style={{color:'white', textDecoration:'none'}}>  <button>Samples</button> </Link> 
        </div>
       
        <div>
          <button onClick={ChangeModelState}>Upload your Plans</button>
        </div>
      </div>
      <BlueUploadModal   isModalOpen={isModalOpen}   setIsModalOpen={setIsModalOpen}></BlueUploadModal>

    </div>
  );
};
