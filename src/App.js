import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Dashboard from "./pages/Dashboard";
// import Acoounts from "./pages/Acoounts";
// import Payroll from "./pages/Payroll";
// import Reports from "./pages/Reports";
// import Advicer from "./pages/Advisor";
// import Contacts from "./pages/Contacts";

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
              <Route path="/accounts" element={<Dashboard />}/>
              <Route path="/payroll" element={<Dashboard />} />
              <Route path="/reports" element={<Dashboard />} />
              <Route path="/advisor" element={<Dashboard />}/>
              <Route path="/contacts" element={<Dashboard />} />
              <Route path="/*" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
