//------------CSS-------------
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "pmt-kickstart.css/src/kickstart.min.css";
import "./scss/mobile.scss";
import "./scss/desktop.scss";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import C from "./utils/classes/Constants";
import F from "./utils/classes/Functions";
import AudioManager from "./utils/classes/audio/AudioManager";
//------------UI_COMPS-------------
import Toggle from "./ui_components/toggle/Toggle";
import VolumeController from "./ui_components/volume_controller/VolumeController";
//------------AUDIO-------------
import HeaterKit from "./assets/audio/heater_kit/HeaterKit";
import PianoKit from "./assets/audio/piano_kit/PianoKit";

interface Props {}

interface State {
  isOn: boolean;
  audioKit: string;
  displayMessage: string;
}

class App extends React.Component<Props, State> {
  private soundManager: AudioManager;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOn: true,
      audioKit: "heater",
      displayMessage: "Drum Machine"
    };
    this.soundManager = new AudioManager(HeaterKit);
    document.onkeypress = this.onKeyPress;
  }

  playAudio = (id: string) => {
    this.soundManager.playAudio(id);
    this.setState({
      displayMessage: this.soundManager.getAudioName(id)
    });
  };

  onKeyPress = (evt: any) => {
    if (!this.state.isOn) return;

    evt = evt || window.event;
    const charCode = evt.keyCode || evt.which;
    const charStr = String.fromCharCode(charCode).toUpperCase();
    this.playAudio(charStr);
  };

  onClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.isOn) this.playAudio(e.currentTarget.id);
  };

  togglePower = () => {
    this.setState(curState => ({ isOn: !curState.isOn }));
  };

  onChangeAudioKit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;
    let audioURLs, displayMessage;

    if (newValue === "heater") {
      audioURLs = HeaterKit;
      displayMessage = "Heater Kit";
    } else {
      audioURLs = PianoKit;
      displayMessage = "Piano Kit";
    }
    this.soundManager.setAudioURLs(audioURLs);
    this.setState({ audioKit: newValue, displayMessage });
  };

  render() {
    const { isOn, audioKit, displayMessage } = this.state;
    return (
      <main className="flex-col-aiC-jcC h-100vh">
        <div id="drum-machine" className="flex-col-aiC p-05e">
          <div id="display" className="red-bg flex-col-aiC w-100p">
            <div className="pink-bg flex-row flex-jcSB">
              <Toggle
                id="power"
                label="Power"
                isToggled={isOn}
                onClick={this.togglePower}
              />

              <div className="flex-col-aiC">
                <label htmlFor="audio-kit">Audio Kit</label>
                <select
                  id="select-audio-kit"
                  name="audio-kit"
                  onChange={this.onChangeAudioKit}
                  value={audioKit}
                >
                  <option value="heater">Heater</option>
                  <option value="piano">Piano</option>
                </select>
              </div>
            </div>
            <div className="yellow-bg">{displayMessage}</div>
          </div>

          <VolumeController />

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
