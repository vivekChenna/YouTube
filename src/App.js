import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="App">
      <Header collapse={collapse}  setCollapse={setCollapse} />
      <Routes>
        <Route
          path="/"
          element={<Body collapse={collapse} setCollapse={setCollapse} />}
        />
      </Routes>
    </div>
  );
}

export default App;
