import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Dashboard from "./pages/Dashboard";
import Acoounts from "./pages/Acoounts";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";
import Advicer from "./pages/Advisor";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="mainContainer">
        <Topbar />
      <div className="topbarlayoutContainer">
        <div className="navbarappContainer">
          <Navbar />
        </div>
        <div className="pagesContainer">
          <div className="singlePageContainer">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accounts" element={<Acoounts />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/advisor" element={<Advicer />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/*" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
