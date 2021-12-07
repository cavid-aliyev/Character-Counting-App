import React from "react";
import Textarea from "./Textarea";

const Counter: React.FC = () => {
  const [text, setText] = React.useState<string>("");

  return <Textarea value={text} onChange={setText}/>;
};

export default Counter;
