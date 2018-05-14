// JSX

const Navbar = props => (
  <div className={`ui inverted ${props.color} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </a>
  </div>
);

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

ReactDOM.render(
  <div>
    <Navbar
      color="green"
      title="ZooKeepr"
      description="Keep track of your animals"
      icon="paw"
    />
    <Navbar
      color="blue"
      title="Beekeepr"
      description="Keep track of your bees"
      icon="paw"
    />
  </div>,
  document.querySelector("#main")
);
