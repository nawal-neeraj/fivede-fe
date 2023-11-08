import { Router, Routes, Route } from "react-router";
import Layout from "../layout";
import Dashboard from "../dashboard/dashboard";
import Sidebar from "../sidebar/sidebar";

const Menu = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default Menu;
