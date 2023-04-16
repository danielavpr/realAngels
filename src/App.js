import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import FounderForm from "./pages/founderForm";
import InvestorForm from "./pages/investorForm";
import Onboarding from "./pages/onboarding";
import AuthenticationGuard from "./components/Common/AuthenticationGuard";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Onboarding /> : <Home />} exact />
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
