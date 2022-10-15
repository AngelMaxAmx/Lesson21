import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import TVShow from './Pages/TVShow';
import Movies from './Pages/Movies';
import { Routes, Route } from "react-router-dom"

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/tv-show' element={<TVShow />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
}

export default App;
