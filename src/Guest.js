import React from "react";
import { MyContext } from "./App";

class Guest extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {function (constextValue) {
          return (
            <div>
              <h4>{constextValue.name}</h4>
              <h4>{constextValue.value}</h4>
              <button onClick={constextValue.handleClick}>Change Value</button>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default Guest;
