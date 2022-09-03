import React from "react";
import web from "../src/images/homepage2.png";
import boeing_zonals from '../src/images/Events/Boeing_Zonals.jpeg';
import summer from '../src/images/Events/summer.jpeg';
import tryst from '../src/images/Events/Tryst.jpeg';
import boeing_finals from '../src/images/Events/Boeing_Finals.jpeg';
import tos from '../src/images/Events/Tour_of_stalls.jpeg';
import id from '../src/images/Events/independence_day.png';

const Events = () => {
  return (
    <div>
      <h1>
        Events
      </h1>
      <div class="container">
        <div class="row">
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={boeing_zonals} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Boeing Zonals</h5>
              <div class='card-text'>Boeing the leading tech giant of the Aeronautics Industry has been conducting annual National Aeromodelling Competitions in 4 zonals since past 6 years. We compete in these zonal competitions to Qualify for finals.</div>
            </div>
            <p class='card-footer my-0'>December/January</p>
          </div>
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={summer} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Summer Exhibition</h5>
              <div class='card-text'>After the summer season, all the projects undertaken by the members of Aeromodelling Club are open for an exhibition when they display their work to the students of IIT Delhi. Their work is also evaluated done by the presiding Faculty incharge of the club.</div>
            </div>
            <p class='card-footer my-0'>August</p>
          </div>
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={tryst} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Tryst</h5>
              <div class='card-text'>The Technical fest of IIT Delhi organised by CAIC. We organise several events such as Glider Making Competition, RC aircraft Competition and Stall presentation. Over the years the Glider Making Challenge proved to be a crowd gatherer for Tryst.</div>
            </div>
            <p class="card-footer my-0">February/March</p>
          </div>
        </div>
        <div class="row">
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={boeing_finals} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Boeing Finals</h5>
              <div class='card-text'>The best of the best from all the 4 Boeing zonal competitions go head on in a fast paced competition that keeps viewers on their nerves the whole time. Every year this event witnesses many representatives from Boeing and several professors from various IITs.</div>
            </div>
            <p class='card-footer my-0'>April</p>
          </div>
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={tos} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Tour of Stalls</h5>
              <div class='card-text'>Every year, Board of Student Welfare(BSW) & Student Mentorship Program(SMP) jointly organise Tour of stalls, where in various models of Remote Controlled (RC) Aircrafts, Drones are put to display and the Freshmen are given brief introduction to club activities. A short demonstration of working models is also done.</div>
            </div>
            <p class="card-footer my-0">July</p>
          </div>
          <div class="card col-lg mx-2 my-2 px-0">
            <img class="card-img-top" src={id} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Independence Day</h5>
              <div class='card-text'>We take pride in flying, so do we take pride in saluting our National Flag. Flag hoisting with a Drone, such an enthralling experience, We assure you goosebumps at this event.</div>
            </div>
            <p class="card-footer my-0">15th August</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
