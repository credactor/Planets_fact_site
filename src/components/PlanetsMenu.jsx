// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const PlanetsMenu = ({planetList, onChange}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const planets = Object.values(planetList);
  const [currentPlanetIndex, setPlanet] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(anchorEl);
  };
  const handleClose = (index) => {
    onChange(index);
    setPlanet(index);
    setAnchorEl(null);
  };

  useEffect(()=>{
    onChange();
  },[currentPlanetIndex]);

  if (planetList === undefined) return null;

  return (
    <div id='compactMenu'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        ≡
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {planets.map((item, index) => {
            return (
              <MenuItem onClick= {function () {handleClose(index)}} key={"Menu"+index}>{item.name}</MenuItem>
            )
          })}
      </Menu>
    </div>
  );
}