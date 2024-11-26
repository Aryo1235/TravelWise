import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
        <LoginUser />
      </Router>
    </div>
  );
}

export default App;
