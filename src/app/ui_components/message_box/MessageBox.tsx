import React from "react";
import PropTypes from "prop-types";
import "./messageBox.scss";

interface Props {
  message: string;
}

const MessageBox: React.FC<Props> = ({ message }) => {
  return (
    <div className="yellow-bg flex-col-aiC-jcC">
      <label>{message}</label>
    </div>
  );
};

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageBox;
