import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div className="">
      <h1>Educator Page</h1>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Educator;
