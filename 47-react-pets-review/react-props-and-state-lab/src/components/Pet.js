import React from 'react';

const Pet = props => (
  <div className="card">
    <div className="content">
      <a className="header">
        {props.pet.name} {props.pet.gender === 'female' ? '♀' : '♂'}
      </a>
      <div className="meta">
        <span className="date">{props.pet.type}</span>
      </div>
      <div className="description">
        <p>Age: {props.pet.age}</p>
        <p>Weight: {props.pet.weight}</p>
      </div>
    </div>
    <div className="extra content">
      {props.isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
      ) : (
        <button onClick={() => props.onAdoptPet(props.pet.id)} className="ui primary button">
          Adopt pet
        </button>
      )}
    </div>
  </div>
);

export default Pet;
