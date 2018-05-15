import React from "react";
import Navbar from "./navbar";
import PaintingsList from "./paintings_list";
import artworks from "../../data/artworks";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: artworks
    };

    this.filterPaintings = this.filterPaintings.bind(this);
  }

  filterPaintings(e) {
    let filteredPaintings = artworks.filter(p =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ paintings: filteredPaintings });
  }

  render() {
    return (
      <div>
        <Navbar
          color="blue"
          title="Paintr"
          description="A list of paintings"
          icon="paint brush"
        />
        <Filter onChange={this.filterPaintings} />
        <PaintingsList paintings={this.state.paintings} />
      </div>
    );
  }
}

export default App;
