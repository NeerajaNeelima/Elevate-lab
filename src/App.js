
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/navbar.jsx'
import Home from './Components/Home/home.jsx'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
