import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import MainLayout from "../pages/layouts";
import SuratTugas from "../pages/perjadin/SuratTugas";
import ListSuratTugas from "../pages/perjadin/SuratTugas/ListSuratTugas";
import CreateSuratTugas from "../pages/perjadin/SuratTugas/CreateSuratTugas";
import UpdateSuratTugas from "../pages/perjadin/SuratTugas/UpdateSuratTugas";
import Usulan from "../pages/perjadin/Usulan";
import ListUsulan from "../pages/perjadin/Usulan/ListUsulan";
import "antd/dist/antd.css";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="surat-tugas" element={<SuratTugas />}>
          <Route index element={<ListSuratTugas />} />
          <Route path="create" element={<CreateSuratTugas />} />
          <Route path="update" element={<UpdateSuratTugas />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Route>
        <Route path="usulan" element={<Usulan />}>
          <Route index element={<ListUsulan />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
};

export default Router;
