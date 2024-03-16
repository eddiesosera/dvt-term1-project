import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Navbar } from './components/navigation/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
