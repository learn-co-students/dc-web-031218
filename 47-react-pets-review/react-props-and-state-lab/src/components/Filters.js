import React from 'react';

// functional component takes in props as arg; there is no `this.props`; we use `this.props` when our component is a class

const Filters = props => (
  <div className="ui form">
    <h3>Animal type</h3>
    <div className="field">
      <select onChange={props.changeTypeCallback} name="type" id="type">
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
    </div>

    <div className="field">
      {/*when someone clicks the button, call the props.findPetsCallback fn that is PASSED DOWN FROM APP*/}
      <button onClick={props.findPetsCallback} className="ui secondary button">
        Find pets
      </button>
    </div>
  </div>
);

// same as above as class component

// class Filters extends React.Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return (
//       <div className="ui form">
//         <h3>Animal type</h3>
//         <div className="field">
//           <select onChange={this.props.changeTypeCallback} name="type" id="type">
//             <option value="all">All</option>
//             <option value="cat">Cats</option>
//             <option value="dog">Dogs</option>
//             <option value="micropig">Micropigs</option>
//           </select>
//         </div>
//
//         <div className="field">
//           <button onClick={this.props.findPetsCallback} className="ui secondary button">
//             Find pets
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Filters;
