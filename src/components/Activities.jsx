import React from "react";

export default function Activities() {
  return (
    <div>
      <h3 className="heading">  Top three activities to do at Kolkata</h3>
      <div className="card-container"  id="cards">
        <div className="card" >
          <img
            src="./src/assets/ravi-singh-7i7NgMk7dCs-unsplash.jpg"
            alt="Howrah Bridge"
            className="img"
          ></img>
          <h3 className="card-title">Howrah Bridge</h3>
          <p className="description">
            An iconic landmark in Kolkata, the Howrah Bridge is a huge steel
            bridge over the Hooghly River. It is considered to be one of the
            longest cantilever bridges in the world.
          </p>
        </div>

        <div className="card">
          <img
            src="./src/assets/saurav-mahto-_q28qN7J7Sg-unsplash.jpg"
            alt="Victoria Memorial"
            className="img"
          ></img>
          <h3 className="card-title">Victoria Memorial</h3>
          <p className="description">
            The largest monument to a monarch anywhere in the world, it stands
            in 64 acres of gardens and is now a museum under the control of the
            Ministry of Culture.
          </p>
        </div>

        <div className="card">
          <img
            src="./src/assets/prado-SPWMpu7pw-k-unsplash.jpg"
            alt="Indian Museum"
            className="img"
          ></img>
          <h3 className="card-title">Indian Museum</h3>
          <p className="description">
            The Indian Museum aka the Imperial Museum of Calcutta is the ninth
            oldest museum in the world, the oldest and largest museum in India
            as well as in Asia.
          </p>
        </div>
      </div>
    </div>
  );
}
