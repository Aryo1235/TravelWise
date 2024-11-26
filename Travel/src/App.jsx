import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterUser from "./pages/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
