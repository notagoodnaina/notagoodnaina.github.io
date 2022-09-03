import React from "react";
import './Gallery.css';
import gal1 from '../images/Airbots/Gallery/gal1.jpeg';
import gal2 from '../images/Airbots/Gallery/gal2.jpeg';
import gal3 from '../images/Airbots/Gallery/gal3.jpeg';
import gal4 from '../images/Airbots/Gallery/gal4.jpeg';
import gal5 from '../images/Airbots/Gallery/gal5.jpeg';
import gal6 from '../images/Airbots/Gallery/gal6.jpeg';
import gal7 from '../images/Airbots/Gallery/gal7.jpeg';
import gal8 from '../images/Airbots/Gallery/gal8.jpeg';
import gal9 from '../images/Airbots/Gallery/gal9.jpeg';
import gal10 from '../images/Airbots/Gallery/gal10.jpeg';
import gal11 from '../images/Airbots/Gallery/gal11.jpeg';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div class="container">
  
  <div class="image-gallery">
    <div class="column">
      <div class="image-item">
        <img src={gal1} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal2} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal3} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
    </div>
    <div class="column">
      <div class="image-item">
        <img src={gal5} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal6} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal7} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal8} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
    </div>
    <div class="column">
    <div class="image-item">
        <img src={gal9} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal10} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal11} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
      <div class="image-item">
        <img src={gal4} alt="" />
        <div class="overlay"><span>Image title</span></div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Gallery;
