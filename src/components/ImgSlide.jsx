import React from "react";
import "../css/slideImg.css";

export default function ImgSlide() {
 const img = 'https://i.postimg.cc/brPS7yDc/charing.png';
  return (
    <div className="containerMain">
      <div className="container-md ">
        <img src={img} alt="logoP" id="logoBlock" />
        <p>Welcome to Ani Fancy here you will find information about anime,thanks for visit us</p>
        <button className="btn">Register</button>
        <div className="container-md2 ">
        <img src={img} alt="logoP" id="logoBlock" />
        <p>Welcome to Ani Fancy here you will find information about anime,thanks for visit us</p>
        <button className="btn">Register</button>
        </div>
        <div className="continerSld">
          <h3>Preview Animes</h3>
        <div className="center slide">
          <img src="https://i.imgur.com/Y8WHhk2.jpg" alt="picture1"/>
          <img src="https://i.imgur.com/r0o8RoH.png" alt="picture2"/>
            <img src="https://i.imgur.com/ioUKL1K.jpg" alt="picture3"/>
              <img src="https://i.imgur.com/Y8WHhk2.jpg" alt="pict3"/>
              </div>
              <button className="btn2">Full View</button>
            </div>
      </div>
    
      </div>
    
  );
}
