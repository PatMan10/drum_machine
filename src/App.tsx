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
import SoundManager from "./utils/SoundManager";
//------------UI_COMPS-------------
import Toggle from "./ui_components/toggle/Toggle";
//------------AUDIO-------------
import HeaterKit from "./assets/audio/heater_kit/HeaterKit";
import PianoKit from "./assets/audio/piano_kit/PianoKit";

interface State {
  isOn: boolean;
  isPiano: boolean;
}

class App extends React.Component<{}, State> {
  private soundManager: SoundManager;

  constructor() {
    super({});
    this.state = {
      isOn: true,
      isPiano: false
    };
    this.soundManager = new SoundManager(HeaterKit);
    document.onkeypress = this.onKeyPress;
  }

  onKeyPress = (evt: any) => {
    if (!this.state.isOn) return;

    evt = evt || window.event;
    const charCode = evt.keyCode || evt.which;
    const charStr = String.fromCharCode(charCode).toUpperCase();
    this.soundManager.play(charStr);
  };

  onClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.isOn) this.soundManager.play(e.currentTarget.id);
  };

  togglePower = () => {
    this.setState(curState => ({ isOn: !curState.isOn }));
  };

  toggleBank = () => {
    this.setState(curState => {
      const src = curState.isPiano ? HeaterKit : PianoKit;
      this.soundManager.setSource(src);
      return { isPiano: !curState.isPiano };
    });
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
            <div className="yellow-bg">Some Sound</div>
          </div>

          <div id="drum-pad">
            <input
              id="Q"
              value="Q"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="W"
              value="W"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="E"
              value="E"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="A"
              value="A"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="S"
              value="S"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="D"
              value="D"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="Z"
              value="Z"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="X"
              value="X"
              type="button"
              onClick={this.onClickButton}
            />
            <input
              id="C"
              value="C"
              type="button"
              onClick={this.onClickButton}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
