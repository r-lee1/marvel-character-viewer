import React from "react";
import { render } from "react-dom";

import CardIndex from "./components/CardIndex";

class App extends React.Component {
  render() {
    return (
      <div>
        <CardIndex />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
