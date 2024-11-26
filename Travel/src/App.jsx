import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage />
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
