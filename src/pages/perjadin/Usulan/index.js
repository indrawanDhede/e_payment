import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";

const Usulan = () => {
  return (
    <div>
      <nav>
        <Link to="create">Create</Link> |<Link to="update">Update</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Usulan;
