import React from "react";
import styles from "../scss/copy-button.module.scss";

interface ICButtonProps {
  onClick(): void;
}

const CopyButton: React.FC<ICButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.copyButton} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Copy Text
    </button>
  );
};

export default CopyButton;
