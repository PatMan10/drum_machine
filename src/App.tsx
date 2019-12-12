//------------CSS-------------
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/mobile.css";
import "./css/desktop.css";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import C from "./utils/Constants";
import F from "./utils/Functions";

interface State {}

class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {};
  }

  render() {
    return (
      <main className="red-bg flex-col-aiC-jcC h-100vh">
        <h1>Drum Machine</h1>
      </main>
    );
  }
}

export default App;
