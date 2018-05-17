import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const HogTile = props => {
  // props: { hog: {} }
  const { name, specialty, greased } = props.hog;
  const weight =
    props.hog[
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    ];

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.hog.name}</Card.Header>
        <div className="achievementText">{props.hog.specialty}</div>
        <br />
        {`Weighing in at ${weight} fridges`}
        <br />
        {greased ? 'THIS HOG IS GREASY' : 'THIS HOG IS NOT GREASY'}
      </Card.Content>
    </Card>
  );
};

export default HogTile;
