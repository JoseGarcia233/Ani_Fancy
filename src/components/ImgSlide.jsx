import React from "react";
import "../css/slideImg.css";

export default function ImgSlide() {
  const img = 'https://i.postimg.cc/brPS7yDc/charing.png';
  return (
    <div className="containerMain">
      <div className="container-md ">
        <img src={img} alt="logoP" id="logoBlock" />
        <p>Welcome to Ani Fancy here you will find information about anime,thanks for visit us</p>
        <button className="btn1">Register</button>
        <div className="container-md2 ">
        <img src={img} alt="logoP" id="logoBlock" />
        <p>Welcome to Ani Fancy here you will find information about anime,thanks for visit us</p>
        <button className="btn1">Register</button>
        </div>
        <div className="continerSld">
          <h3>Preview Animes</h3>
        <div className="center slide">
          <img src="https://media.kitsu.io/anime/poster_images/1/small.jpg" alt="picture1"/>
          <img src="https://media.kitsu.io/anime/3/poster_image/large-32a8adb71c80bf616527a1651b92e39f.jpeg" alt="picture2"/>
            <img src="https://media.kitsu.io/anime/poster_images/4/large.jpg" alt="picture3"/>
              <img src="https://media.kitsu.io/anime/poster_images/10/large.jpg" alt="pict3"/>
              <img src="https://media.kitsu.io/anime/poster_images/6/large.jpg" alt="pict4"/>
              </div>
              <button className="btn2">Full View</button>
            </div>
      </div>
    
      </div>
    
  );
}
