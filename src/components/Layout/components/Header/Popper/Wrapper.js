import React from "react";
import classNames from "classnames/bind";
import styles from "../Popper/Popper.module.scss";
const cx1 = classNames.bind(styles);
const Wrapper = ({ children }) => {
  return <div className={styles.cover}>{children}</div>;
};

export default Wrapper;
