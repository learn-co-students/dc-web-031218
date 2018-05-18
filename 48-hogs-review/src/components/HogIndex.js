import React from 'react';
import HogTile from './HogTile';
import hogData from '../porkers_data';
import { Button, Dropdown } from 'semantic-ui-react';

class HogIndex extends React.Component {
  state = { hogs: hogData, sorted: { greased: false, sortBy: 'name' } };

  handleHogGreasedSort = event => {
    this.setState({ sorted: { ...this.state.sorted, greased: !this.state.sorted.greased } })
  };

  handleHogPropSort = (event, object) => {
    this.setState({ sorted: { ...this.state.sorted, sortBy: object.value } })
  }

  greasyFilter = () => {
    // filtering hogs based on state
    // returning an array of hog tiles
    if (this.state.sorted.greased) {
      return this.state.hogs.filter(h => h.greased)
    } else {
      return this.state.hogs;
    }
  }

  hogSort = () => {
    const hogs = this.greasyFilter()
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    if (this.state.sorted.sortBy === 'name') {
      hogs.sort((hog1, hog2) => {
        return hog1.name.localeCompare(hog2.name)
      })
    } else if (this.state.sorted.sortBy === 'weight') {
      hogs.sort((hog1, hog2) => {
        return hog1[weight] - hog2[weight]
      })
    }
    return hogs.map(hog => <HogTile key={hog.name} hog={hog} />)
  }

  render() {
    console.log(this.state)
    const dropdownOptions = [
      {
        text: 'Weight',
        value: 'weight',
      },
      {
        text: 'Name',
        value: 'name',
      }
    ]
    return (
      <div>
        <h1>HOGINDEX</h1>
        <Button name={'greasy'} primary={true} onClick={this.handleHogGreasedSort}>
          TOGGLE GREASY HOGS
        </Button>
        <Dropdown
          placeholder='Select Hog Sort'
          fluid selection
          options={dropdownOptions}
          onChange={this.handleHogPropSort}
        />
        {this.hogSort()}
      </div>
    );
  }
}

export default HogIndex;
