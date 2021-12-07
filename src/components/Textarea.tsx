import React from "react";

interface TextareaProps {
  value: string;
  onChange(e: string): void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return <textarea value={value} onChange={handleChange} />;
};

export default Textarea;
