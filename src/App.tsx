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
//------------UI_COMPS-------------
import Toggle from "./ui_components/toggle/Toggle";

interface State {
  isOn: boolean;
  isPiano: boolean;
}

class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      isOn: false,
      isPiano: false
    };
  }

  onclickButton = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.id) {
      case "Q":
        console.log("playing sound Q");
        break;

      case "W":
        console.log("playing sound W");
        break;

      case "E":
        console.log("playing sound E");
        break;

      case "A":
        console.log("playing sound A");
        break;

      case "S":
        console.log("playing sound S");
        break;

      case "D":
        console.log("playing sound D");
        break;

      case "Z":
        console.log("playing sound Z");
        break;

      case "X":
        console.log("playing sound X");
        break;

      case "C":
        console.log("playing sound C");
        break;
    }
  };

  togglePower = () => {
    this.setState(curState => ({ isOn: !curState.isOn }));
  };

  toggleBank = () => {
    this.setState(curState => ({ isPiano: !curState.isPiano }));
  };

  render() {
    const { isOn, isPiano } = this.state;
    return (
      <main className="flex-col-aiC-jcC h-100vh">
        <div id="drum-machine" className="flex-col-aiC p-05e">
          <div id="display" className="red-bg flex-col-aiC w-100p">
            <div className="pink-bg flex-row flex-jcSB w-40p">
              <Toggle
                id="power"
                label="Power"
                isToggled={isOn}
                onClick={this.togglePower}
              />
              <Toggle
                id="bank"
                label="Bank"
                isToggled={isPiano}
                onClick={this.toggleBank}
              />
            </div>
          </div>

          <div id="drum-pad">
            <input
              id="Q"
              value="Q"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="W"
              value="W"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="E"
              value="E"
              type="button"
              onClick={this.onclickButton}
            />

            <input
              id="A"
              value="A"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="S"
              value="S"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="D"
              value="D"
              type="button"
              onClick={this.onclickButton}
            />

            <input
              id="Z"
              value="Z"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="X"
              value="X"
              type="button"
              onClick={this.onclickButton}
            />
            <input
              id="C"
              value="C"
              type="button"
              onClick={this.onclickButton}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
