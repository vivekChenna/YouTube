import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<WatchVideo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
