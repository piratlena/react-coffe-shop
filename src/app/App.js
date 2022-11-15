import React from 'react';
import {Routes,Route,} from "react-router-dom";
import '../style/style.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Home from '../pages/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import OurBest from '../components/OurBest/OurBest';
import Layout from '../components/Layout';
import OurCoffe from '../pages/OurCoffe';

export const FilterContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <div className="app">

      <FilterContext.Provider value={{searchValue, setSearchValue}}>
      <Header/>

          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/our-coffe' element={<OurCoffe/>}/>
          </Routes>

      <Footer/>
      </FilterContext.Provider>
    </div>
    
  );
}

export default App;
