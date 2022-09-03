import React from "react";
import Raptor from '../images/Airbots/Independent/Raptor.jpeg';
import DFCR from '../images/Airbots/Independent/DFCR.jpeg';
import DFCR2 from '../images/Airbots/Independent/DFCR2.jpeg';
import Tricopter from '../images/Airbots/Independent/tricopter.jpeg';
import VTOL from '../images/Airbots/Independent/VTOL.png';
import heli1 from '../images/Airbots/Independent/helicopter1.jpeg';
import heli2 from '../images/Airbots/Independent/helicopter2.jpeg';


const IndependentProject = () => {
  return (
    <div>
      <h1>Independent Project</h1>
      <div class='container'>
        <div class='row'>
          <div class="card col-sm mx-2 my-2 px-0">
            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={heli1} class="d-block w-100 airbots-car-img" alt=""/>
                </div>
                <div class="carousel-item">
                  <img src={heli2} class="d-block w-100 airbots-car-img" alt="..."/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Helicopter</h5>
            </div>
          </div>
          <div class="card col-sm mx-2 my-2 px-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={DFCR} class="d-block w-100 airbots-car-img" alt=""/>
                </div>
                <div class="carousel-item">
                  <img src={DFCR2} class="d-block w-100 airbots-car-img" alt="..."/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Drone for Collecting Data</h5>
            </div>
          </div>
        </div>
        <div class='row'>
            <div class="card col-sm mx-2 my-2 px-0">
              <img class="card-img-top" src={Tricopter} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Tricopter</h5>
              </div>
            </div>
            <div class="card col-sm mx-2 my-2 px-0">
              <img class="card-img-top" src={VTOL} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Vertical Take Off and Landing (VTOL)</h5>
              </div>
            </div>
        </div>
        <div class='row'>
          <div class="card col-sm mx-2 my-2 px-0">
            <img class="card-img-top" src={Raptor} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">F-22 Raptor</h5>
            </div>
          </div>
          <div class="card col-sm mx-2 my-2 px-0 border-0">
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndependentProject;
