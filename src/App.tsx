import { HashRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Head from './components/Home/Header-rightEntry/RightEntry';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/head' element={<Head />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
