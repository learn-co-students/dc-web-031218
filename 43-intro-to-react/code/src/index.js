// <div class="ui inverted orange menu">
//       <a class='item'>
//         <h2 class="ui header">
//           <i class="paw icon"></i>
//           <div class="content">
//             ZooKeepr
//           </div>
//           <div class="sub header">
//             Keep track of your animals
//           </div>
//         </h2>
//       </a>
//     </div>

const Navbar = props => {
  console.log(props);
  return React.createElement(
    "div",
    {
      className: `ui inverted ${props.color} menu`
    },
    [
      React.createElement("a", {}, "Hello"),
      React.createElement("div", {}, "Another")
    ]
  );
};

ReactDOM.render(
  Navbar({
    color: "red"
  }),
  document.querySelector("#main")
);
