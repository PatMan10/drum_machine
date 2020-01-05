//------------SCSS-------------
import "./powerToggle.scss";
//------------LIBS-------------
import React from "react";
import PropTypes from "prop-types";
//------------UI_COMP-------------
import Toggle from "../generic/toggle/Toggle";

interface Props {
  id: string;
  label: string;
  onClick: () => void;
  isToggled: boolean;
}

const PowerToggle: React.FC<Props> = (props: Props) => {
  return <Toggle {...props} />;
};

PowerToggle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired
};

export default PowerToggle;
