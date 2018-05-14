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
