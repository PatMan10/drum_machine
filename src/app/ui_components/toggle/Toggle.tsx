import React from "react";
import PropTypes from "prop-types";
import "./toggle.scss";

interface Props {
  id: string;
  label: string;
  onClick: () => void;
  isToggled: boolean;
}

const Toggle: React.FC<Props> = ({ id, label, onClick, isToggled }) => {
  let toggleClasses = "toggle toggle-s";
  let toggleBallClasses = "red-bg toggle-ball";
  if (isToggled) {
    toggleClasses += " bg-primary";
    toggleBallClasses += " flex-asE";
  } else {
    toggleClasses += " bg-secondary";
  }
  return (
    <div className="cyan-bg toggle-container vertical">
      <label>{label}</label>
      <div id={id} className={toggleClasses} onClick={onClick}>
        <div className={toggleBallClasses}></div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired
};

export default Toggle;
