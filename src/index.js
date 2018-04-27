import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import CardIndex from "./components/CardIndex";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <CardIndex />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
