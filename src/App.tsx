import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sender from "./pages/signature/Sender";
import Receiver from "./pages/signature/Receiver";
import { About } from "./pages/signature/About";


function App() {
  return (
    <Router>
      <div className="h-screen flex flex-row">
        <div className="w-1/5 "></div>
        <div className="w-3/5 bg-blue-100">
          <NavBar />
          <div className="m-3">
            <Routes>
              <Route path="/" element={<Sender/>}/>
              <Route path="/receiver" element={<Receiver/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
        </div>
        <div className="w-1/5 "></div>
      </div>
    </Router>
  );
}

export default App;
