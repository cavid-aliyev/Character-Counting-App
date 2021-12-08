import React from "react";
import { Textarea, Count, CopyButton } from "../components";
import styles from '../scss/counter.module.scss';

const Counter: React.FC = () => {
  const [text, setText] = React.useState<string>("");

  console.log(text);

  return (
    <>
      <header className={styles.header}>
        <Count value={text} />
        <CopyButton onClick={() => {}} />
      </header>
      <section className={styles.section}>
        <Textarea value={text} onChange={setText} />
      </section>
    </>
  );
};

export default Counter;
