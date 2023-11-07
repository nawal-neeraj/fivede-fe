import "./style.css";
import Login from "./component/Signup/login";
import Dashboard from "./component/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
