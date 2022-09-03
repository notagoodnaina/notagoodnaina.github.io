import React from "react";
import {NavLink} from "react-router-dom";
import Common from "../common";


const Airbots = () => {
  return (
    <div>
      <h1>Airbots</h1>
      <div class='container'>
        <div class='row'>
          <div class="card col-sm mx-2 my-2 px-0">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">F-22 Raptor</h5>
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
                  <img src="..." class="d-block w-100" alt=""/>
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..."/>
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
      </div>
    </div>
  );
};

export default Airbots;
