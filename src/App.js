import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/auth/Signup";
import Login from './Pages/auth/Login'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import Resources from "./Pages/Resources";




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />


        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
