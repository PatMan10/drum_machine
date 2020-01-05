//------------CSS-------------
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "pmt-kickstart.css/src/kickstart.min.css";
import "./app.scss";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import AudioManager from "./utils/classes/audio/AudioManager";
//------------UI_COMPS-------------
import AudioKitSelector from "./ui_components/audio_kit_selector/AudioKitSelector";
import DrumPad from "./ui_components/drum_pad/DrumPad";
import MessageBox from "./ui_components/message_box/MessageBox";
import PowerToggle from "./ui_components/power_toggle/PowerToggle";
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
  private audioManager: AudioManager;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOn: true,
      audioKitName: "heater",
      displayMessage: "Drum Machine",
      volume: "50"
    };
    this.audioManager = new AudioManager(HeaterKit);
    document.onkeypress = this.onKeyPress;
  }

  playAudio = (id: string) => {
    this.audioManager.playAudio(id);
    this.setState({
      displayMessage: this.audioManager.getAudioName(id)
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
    this.setState(curState => ({
      isOn: !curState.isOn,
      displayMessage: curState.isOn ? "Power Off" : "Power On"
    }));
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
    this.audioManager.setAudioURLs(audioURLs);
    this.setState({ audioKitName: newValue, displayMessage });
  };

  onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.isOn) return;

    const volume = e.currentTarget.value;
    const displayMessage = "Volume " + volume;
    this.audioManager.setVolume(Number(volume));
    this.setState({ displayMessage, volume });
  };

  render() {
    const { isOn, audioKitName, displayMessage, volume } = this.state;
    return (
      <main className="flex-col-aiC-jcC">
        <div id="drum-machine" className="silver-bg flex-col-aiC p-05e">
          <div id="display" className="flex-col-aiC flex-jcSB w-100p">
            <div className="flex-row flex-jcSB w-65p">
              <PowerToggle
                id="power-toggle"
                label="Power"
                isToggled={isOn}
                onClick={this.togglePower}
              />

              <AudioKitSelector
                onChange={this.onChangeAudioKit}
                value={audioKitName}
              />
            </div>

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
