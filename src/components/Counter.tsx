import React from "react";
import { Textarea, Count } from "../components";


const Counter: React.FC = () => {
  const [text, setText] = React.useState<string>("");

  console.log(text);

  return (
    <>
      <Count value={text} />
      <Textarea value={text} onChange={setText} />
    </>
  );
};

export default Counter;
