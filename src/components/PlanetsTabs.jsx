import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PlanetsTabs = ({planetList, planetIndex, onChange}) => {
  const [currentPlanetIndex, setPlanet] = useState(0);
  const [currentPlanetView, setView] = useState(0);
  const views = ["overview", "structure", "geology"];
  const imageViews = ["planet", "internal", "geology"];
  const viewButtons = ["OVERVIEW", "INTERNAL STRUCTURE", "SURFACE GEOLOGY"];
  const planets = Object.values(planetList);
  
  useEffect(()=>{
    onChange();
  },[currentPlanetIndex]);

  if (planetIndex >= 0 && currentPlanetIndex != planetIndex) {
    setPlanet(planetIndex);
  };

  const handleChange = (event, newPlanet) => {
    setPlanet(newPlanet);
    onChange(newPlanet);
    // console.log("new index:",currentPlanetIndex);
  };

  const handleView = (event, newView) => {
    setView(newView);
    // console.log("new view:",currentPlanetView);
  };

  if (planets.length < 1) {
    return null;
  } else {
  return (
    <>
      <Box id='tabHeader' sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs textColor="inherit" value={currentPlanetIndex} onChange={handleChange} aria-label="basic tabs example" centered>
          {planets.map((planet, index) => {
            return (<Tab label={planet.name} {...a11yProps({ index })} key={"Tab" + index} />)
          })}
        </Tabs>
      </Box>
      <Tabs textColor="inherit" id='viewHeader' value={currentPlanetView} onChange={handleView} aria-label="planet view" centered>
        {viewButtons.map((item, index) => {
          return (<Tab label={item} {...a11yProps(index)} key={"View" + index} />)
        })}
      </Tabs>
      <div id='main'>
        <div id='picture'>
          {/* <img src={"./src" + planets[currentPlanetIndex].images[imageViews[currentPlanetView]]. */}
          <img src={"../config" + planets[currentPlanetIndex].images[imageViews[currentPlanetView]].
            slice(1)} alt={planets[currentPlanetIndex].name+' picture'}/>
        </div>
        <div id='wiki'>
        <div id='info'>
          <h1 id='name'>{planets[currentPlanetIndex].name}</h1>
          <p>{planets[currentPlanetIndex][views[currentPlanetView]].content}</p>
          <p id='source'>Source: <a href={planets[currentPlanetIndex][views[currentPlanetView]].source}>Wikipedia</a> </p>
        </div>
        <Stack id='viewButtons' spacing={1} direction="column">
          {viewButtons.map((item, index) => {
            return (<Button hover="true" className="Button" color='white' variant="outlined" onClick={() => { setView(index) }} {...a11yProps(index)} key={"Button" + index}>{item}</Button>)
          })}
        </Stack>
        </div>
      </div>
      <div id='datum'>
        <div className='dataCard'>
          <span className='dataName'>ROTATION TIME</span>
          <span className='dataValue'>{planets[currentPlanetIndex].rotation}</span>
        </div>
        <div className='dataCard'>
          <span className='dataName'>REVOLUTION TIME</span>
          <span className='dataValue'>{planets[currentPlanetIndex].revolution}</span>
        </div>
        <div className='dataCard'>
          <span className='dataName'>RADIUS</span>
          <span className='dataValue'>{planets[currentPlanetIndex].radius}</span>
        </div>
        <div className='dataCard'>
          <span className='dataName'>AVERAGE TEMP.</span>
          <span className='dataValue'>{planets[currentPlanetIndex].temperature}</span>
        </div>
      </div>
    </>
  );
}
}