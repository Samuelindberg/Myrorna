import "./App.css";
import Header from "./Global_components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/intropage/HomePage";
import Handpicked from "./pages/handpicked/HandpickedPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/handpicked"
          element={
            <>
              <Handpicked />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
