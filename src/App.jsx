import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
// import React, { useState, useEffect, useRef } from 'react';
import { fetchPlanets } from './api/Planets';
import './App.css';
import { PlanetsTabs } from './components/PlanetsTabs';
import { PlanetsMenu } from './components/PlanetsMenu';

function App() {
  const [planets, loadPlanets] = useState([]);
  const [currentPlanetIndex, setPlanet] = useState(0);

  useEffect(()=>{
    getPlanets();
  },[]);

  const handleChangeMenu = (value) => {
    if (value >= 0) {
    setPlanet(value);
    }
    // console.log("onChange:",currentPlanetIndex);
  }

  const getPlanets = async () => {
    try {
      const result = await fetchPlanets();
      loadPlanets(result);
    } catch (error) {
      setError('Could not fetch planets');
    } 
  };

  if (planets.length < 1) {
    return null;
  } else {
  return (    
    <>
    <div id='head'>
      <h2 id='siteName'>THE PLANETS</h2>
      <PlanetsMenu planetList={planets} onChange={handleChangeMenu} />
    </div>
      <PlanetsTabs planetList={planets} planetIndex={currentPlanetIndex} onChange={handleChangeMenu}/>
    </>
  )
}}

export default App;
