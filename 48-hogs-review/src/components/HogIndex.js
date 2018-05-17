import React from 'react';
import HogTile from './HogTile';
import hogData from '../porkers_data';
import { Button } from 'semantic-ui-react';

class HogIndex extends React.Component {
  state = { hogs: hogData, sorted: { greased: false, name: false, weight: null } };

  handleHogGreasedSort = event => {
    this.setState({ sorted: { ...this.state.sorted, greased: !this.state.sorted.greased } }, () =>
      console.log(this.state)
    );
  };

  render() {
    let hogTiles;
    if (this.state.sorted.greased) {
      hogTiles = this.state.hogs
        .filter(h => h.greased)
        .map(hog => <HogTile key={hog.name} hog={hog} />);
    } else {
      hogTiles = this.state.hogs.map(hog => <HogTile key={hog.name} hog={hog} />);
    }

    return (
      <div>
        <h1>HOGINDEX</h1>
        <Button name={'greasy'} primary={true} onClick={this.handleHogGreasedSort}>
          TOGGLE GREASY HOGS
        </Button>
        {hogTiles}
      </div>
    );
  }
}

export default HogIndex;
