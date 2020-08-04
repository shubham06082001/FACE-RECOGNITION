import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute m2">
        <img
          id="inputimage"
          src={imageUrl}
          alt="Face Detection Model"
          
        />
        <div
          className="bounding-box"
          style={{
            left: box.leftCol,
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
