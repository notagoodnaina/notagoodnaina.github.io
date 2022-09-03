import React from "react";
import insti1 from '../images/Airbots/Institute/synchropter1.jpeg';
import insti2 from '../images/Airbots/Institute/synchropter1.jpeg';

const IndependentProject = () => {
  return (
    <div>
      <h1>Institute Project</h1>
      <h2>Discover & Learn 1234 - Drones for high altitude & high wind operations</h2>
      <h3>Objective</h3>
      <div className='page-content'>
        <div align = 'center' class='float-start'>
					<img src={insti1}/>
				</div>
        <p>To design a UAV which can produce high thrust (or) mass flow rate( at ambient conditions) to account for the thinner air at high altitudes and perform necessary operations at high altitudes. The primary purpose of the drones being delivering more payload than any conventional aircraft for the same mass using less energy.</p>
      </div>
      <h2>Intermeshed Rotor/ Synchropter</h2>
      <p>As the name suggests, synchropter has two rotors but placed at an angle to the normal direction. The rotors are intermeshed such that they don’t collide or obstruct one another. Synchropter has a lifting capacity of twice its own weight. Two intermeshed rotors also provide extra maneuverability to the model. Example: Kaman255, Kmax etc...</p>
    </div>
  );
};

export default IndependentProject;
