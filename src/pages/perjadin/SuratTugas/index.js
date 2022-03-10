import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";

const SuratTugas = () => {
  return (
    <div>
      <nav>
        <Link to="create">Create</Link> |<Link to="update">Update</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SuratTugas;
