"use strict";

var Navbar = function Navbar(props) {
  return React.createElement(
    "div",
    { className: "ui inverted " + props.color + " menu" },
    React.createElement(
      "a",
      { className: "item" },
      React.createElement(
        "h2",
        { className: "ui header" },
        React.createElement("i", { className: props.icon + " icon" }),
        React.createElement(
          "div",
          { className: "content" },
          props.title
        ),
        React.createElement(
          "div",
          { className: "sub header" },
          props.description
        )
      )
    )
  );
};

// const Navbar = props => {
//   return React.createElement(
//     "div",
//     {
//       className: `ui inverted ${props.color} menu`
//     },
//     React.createElement(
//       "a",
//       { className: "item" },
//       React.createElement(
//         "h2",
//         {
//           className: "ui header"
//         },
//         [
//           React.createElement("i", { className: `${props.icon} icon` }, null),
//           React.createElement("div", { className: "content" }, props.title),
//           React.createElement(
//             "div",
//             { className: "sub header" },
//             props.description
//           )
//         ]
//       )
//     )
//   );
// };

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Navbar, {
    color: "green",
    title: "ZooKeepr",
    description: "Keep track of your animals",
    icon: "paw"
  }),
  React.createElement(Navbar, {
    color: "blue",
    title: "Beekeepr",
    description: "Keep track of your bees",
    icon: "paw"
  })
), document.querySelector("#main"));

