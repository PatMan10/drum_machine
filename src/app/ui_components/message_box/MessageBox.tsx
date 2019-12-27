import React from "react";
import PropTypes from "prop-types";
import "./messageBox.scss";

interface Props {
  message: string;
}

const MessageBox: React.FC<Props> = ({ message }) => {
  return (
    <div
      id="message-box"
      className="whiteSmoke-bg flex-col-aiC-jcC h-30p w-65p"
    >
      <label id="message">{message}</label>
    </div>
  );
};

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageBox;
