import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
