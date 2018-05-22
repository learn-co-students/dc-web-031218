import React from "react";

const Login = props => {
  console.log("From Login", props);
  return (
    <div className="ui raised very padded text container segment">
      <div className="ui form">
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" placeholder="username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <button className="ui button fluid primary large">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
