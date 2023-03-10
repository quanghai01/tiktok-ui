import React from "react";
import Header from "../components/Header/Header";

import Sidebar from "./Sidebar/Sidebar";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
