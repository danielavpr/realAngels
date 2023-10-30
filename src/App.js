import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import FounderForm from "./pages/founderForm";
import InvestorForm from "./pages/investorForm";
import Onboarding from "./pages/onboarding";
import AuthenticationGuard from "./components/Common/AuthenticationGuard";
import Navbar from "./components/Landing/Navbar";
import Sidebar from "./components/Landing/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Onboarding /> : <Home />}
          exact
        />
        <Route
          path="/investor-matching"
          element={<AuthenticationGuard component={InvestorForm} />}
          exact
        />
        <Route
          path="/founder-matching"
          element={<AuthenticationGuard component={FounderForm} />}
          exact
        />
        <Route
          path="/dashboard"
          element={<AuthenticationGuard component={Dashboard} />}
          exact
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
