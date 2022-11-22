/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/actions/blogActions';
import Home from './pages/Home';

import {
  Routes,
  Route,
} from "react-router-dom";
import Details from './pages/Details';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className="App container">
      <h1 className='text-info mt-4'>Fake Blogs</h1>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
