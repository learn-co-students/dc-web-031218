import React from 'react';

import Pet from './Pet';

// we use props instead of this.props in functional components

const PetBrowser = props => {
  // object destructuring
  // const { pets, adoptedPets, onAdoptPet } = props;

  const petCards = props.pets.map(p => {
    const isAdopted = props.adoptedPets.includes(p.id);

    return <Pet key={p.id} pet={p} isAdopted={isAdopted} onAdoptPet={props.onAdoptPet} />;
  });
  // petCards is an ARRAY of react components; React will render this array of components for us
  return <div className="ui cards">{petCards}</div>;
};

export default PetBrowser;
