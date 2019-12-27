import React from "react";
import PropTypes from "prop-types";
import "./drumPad.scss";

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const DrumPad: React.FC<Props> = ({ onClick }) => {
  return (
    <div id="drum-pad">
      <input id="Q" value="Q" type="button" onClick={onClick} />
      <input id="W" value="W" type="button" onClick={onClick} />
      <input id="E" value="E" type="button" onClick={onClick} />
      <input id="A" value="A" type="button" onClick={onClick} />
      <input id="S" value="S" type="button" onClick={onClick} />
      <input id="D" value="D" type="button" onClick={onClick} />
      <input id="Z" value="Z" type="button" onClick={onClick} />
      <input id="X" value="X" type="button" onClick={onClick} />
      <input id="C" value="C" type="button" onClick={onClick} />
    </div>
  );
};

DrumPad.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DrumPad;
