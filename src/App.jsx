import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ApplicationForm from "./components/ApplicationForm";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Powerline from "./components/Powerline";
import EarningsTracker from "./components/EarningsTracker";
import SignupsFeed from "./components/SignupsFeed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/powerline" element={<Powerline />} />
        <Route path="/earnings" element={<EarningsTracker />} />
        <Route path="/signups" element={<SignupsFeed />} />
      </Routes>
    </Router>
  );
};

export default App; 