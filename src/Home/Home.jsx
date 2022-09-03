import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import welcome from '../images/Home/Welcome.jpeg';
import design from '../images/Home/Design.png';
import build from '../images/Home/Build.png';
import fly from '../images/Home/Fly.jpeg'

const Home = () => {
  return (
    <div class='my-3'>
    <div id="carouselExampleIndicators" class="carousel slide mb-3" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <center>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <center>
            <img src={welcome} class="d-block w-100" alt="..."/>
          </center>
        </div>
        <div class="carousel-item">
          <center>
            <img src={design} class="d-block w-100" alt="..."/>
          </center>
        </div>
        <div class="carousel-item">
          <center>
            <img src={build} class="d-block w-100" alt="..."/>
          </center>
        </div>
	      <div class="carousel-item">
          <center>
            <img src={fly} class="d-block w-100" alt="..."/>
          </center>
        </div>
      </div>
      </center>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class='container-sm quote mr-5 ml-2'>
      <div>
        Once you have tasted flight, you will forever walk the Earth with your eyes turned skyward, for there you have been, and there you will always long to return.
      </div>
      <div>
        ~Leonardo Da Vinci
      </div>
    </div>
    <div class='container-flex my-5 mx-2 about'>
      <h4 class='text-center'>
        Come Fly With Us
      </h4>
      Aeromodelling Club, IIT-Delhi is a group of aeromodelling and aviation enthusiasts who have innate desire for flying. Aeromodelling is a work of art where engineering and creativity synergize in developing sophisticated flying systems. With the immense scope of creativity and interdisciplinary nature, it gives a person chance to develop a complete system with people across various departments and specialization. We welcome all those students who perceive this as a science, hobby or a sport. Our objective is to unify these like-minded enthusiasts on a common platform and do something exciting in new ways...
    </div>
    </div>
  );
};

export default Home;
