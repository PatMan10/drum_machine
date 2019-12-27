import React from "react";
import PropTypes from "prop-types";
import "./volumeController.scss";

interface Props {
  id: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VolumeController: React.FC<Props> = ({ id, value, onChangeHandler }) => {
  return (
    <div className="salmon-bg slide-container">
      <input
        id={id}
        className="red-bg slider"
        max="100"
        min="0"
        onChange={onChangeHandler}
        type="range"
        value={value}
      />
    </div>
  );
};

VolumeController.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default VolumeController;
