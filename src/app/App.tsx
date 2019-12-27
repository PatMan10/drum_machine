//------------CSS-------------
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "pmt-kickstart.css/src/kickstart.min.css";
import "./app.scss";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import C from "./utils/classes/Constants";
import F from "./utils/classes/Functions";
import AudioManager from "./utils/classes/audio/AudioManager";
//------------UI_COMPS-------------
import AudioKitSelector from "./ui_components/audio_kit_selector/AudioKitSelector";
import DrumPad from "./ui_components/drum_pad/DrumPad";
import MessageBox from "./ui_components/message_box/MessageBox";
import Toggle from "./ui_components/toggle/Toggle";
import VolumeController from "./ui_components/volume_controller/VolumeController";
//------------AUDIO-------------
import HeaterKit from "./assets/audio/heater_kit/HeaterKit";
import PianoKit from "./assets/audio/piano_kit/PianoKit";

interface Props {}

interface State {
  isOn: boolean;
  audioKitName: string;
  displayMessage: string;
  volume: string;
}

class App extends React.Component<Props, State> {
  private soundManager: AudioManager;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOn: true,
      audioKitName: "heater",
      displayMessage: "Drum Machine",
      volume: "50"
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

  onKeyPress = (e: any) => {
    if (!this.state.isOn) return;

    e = e || window.event;
    const charCode = e.keyCode || e.which;
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
    if (!this.state.isOn) return;

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
    this.setState({ audioKitName: newValue, displayMessage });
  };

  onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.isOn) return;

    const volume = e.currentTarget.value;
    this.soundManager.setVolume(Number(volume));
    this.setState({ volume });
  };

  render() {
    const { isOn, audioKitName, displayMessage, volume } = this.state;
    return (
      <main className="flex-col-aiC-jcC h-100vh">
        <div id="drum-machine" className="flex-col-aiC p-05e">
          <div id="display" className="red-bg flex-col-aiC w-100p">
            <Toggle
              id="power"
              label="Power"
              isToggled={isOn}
              onClick={this.togglePower}
            />

            <AudioKitSelector
              onChange={this.onChangeAudioKit}
              value={audioKitName}
            />

            <MessageBox message={displayMessage} />

            <VolumeController
              id="volume-contoller"
              value={volume}
              onChangeHandler={this.onChangeVolume}
            />
          </div>

          <DrumPad onClick={this.onClickButton} />
        </div>
      </main>
    );
  }
}

export default App;
