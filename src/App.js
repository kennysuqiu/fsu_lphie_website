import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import { homeObjOne, homeObjThree, homeObjTwo } from "./components/InfoPage/Data";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/history" element={<InfoPage {...homeObjOne} />} exact />
        <Route path="/aboutus" element={<InfoPage {...homeObjTwo} />} exact />
        <Route path="/philanthropy" element={<InfoPage {...homeObjThree} />} exact />
      </Routes>
    </Router>
  );
}

export default App;
