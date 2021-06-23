import './App.css';
import React, {useEffect} from 'react'
import Delivery from './components/Delivery/Delivery';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import {useDispatch} from 'react-redux'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()

  useEffect(async() => {
      const data = await axios.get('/api/foods/')
      dispatch({type: 'GET_GOODS', payload: data.data})
  },[])
  
  return (
    <div className="App">
      <Header />
      <Delivery />
      <NavBar />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
