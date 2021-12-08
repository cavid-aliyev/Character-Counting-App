import React from "react";
import styles from "../scss/textare.module.scss";

interface TextareaProps {
  value: string;
  onChange(e: string): void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      className={styles.textarea}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Textarea;
