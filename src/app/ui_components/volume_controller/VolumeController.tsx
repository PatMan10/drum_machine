import React from "react";
import PropTypes from "prop-types";
import "./volumeController.scss";

interface Props {}

const VolumeController: React.FC<Props> = props => {
  return (
    <div className="white-bg volume-controller">
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
      <div className="silver-bg volume-bar"></div>
    </div>
  );
};

VolumeController.propTypes = {};

export default VolumeController;
