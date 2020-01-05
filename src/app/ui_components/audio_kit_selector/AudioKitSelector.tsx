import React from "react";
import PropTypes from "prop-types";
import "./audioKitSelector.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const AudioKitSelector: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="flex-col-aiC select-container">
      <label htmlFor="audio-kit">Audio Kit</label>
      <select
        id="audio-kit-select"
        name="audio-kit"
        onChange={onChange}
        value={value}
      >
        <option value="heater">Heater</option>
        <option value="piano">Piano</option>
      </select>
    </div>
  );
};

AudioKitSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default AudioKitSelector;
