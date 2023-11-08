import "./style.css";
import Login from "./component/Signup/login";
import Dashboard from "./component/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Header from "./component/header";
import Menu from "./component/menu/menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
