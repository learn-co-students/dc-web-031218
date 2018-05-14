import React from "react";
import Navbar from "./navbar";
import PaintingsList from "./paintings_list";

const App = () => (
  <div>
    <Navbar
      color="blue"
      title="Paintr"
      description="A list of paintings"
      icon="paint brush"
    />
    <PaintingsList />
  </div>
);

export default App;
