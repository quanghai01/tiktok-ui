import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Button = ({ to, href, primary, children, onClick, ...passProps }) => {
  let Comp = "button";
  const classes = cx("wrapper", {
    primary,
  });
  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
