import React from "react";
import User from "./User";

export const MyContext = React.createContext();

class App extends React.Component {
  state = {
    name: "React",
    value: 10
  };

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const contextValue = {
      name: this.state.name,
      value: this.state.value,
      handleClick: this.handleClickContext
    };
    return (
      <MyContext.Provider value={contextValue}>
        <div className="App">
          <div>
            <User />
          </div>
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
