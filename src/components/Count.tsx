import React from "react";
import styles from "../scss/count.module.scss";

interface ICountProps {
  value: string;
}

const Count: React.FC<ICountProps> = ({ value = "" }) => {
  return <strong className={styles.count}>{value.length}</strong>;
};

export default Count;
