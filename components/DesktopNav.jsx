import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';
import { scrollTo } from '../helpers/scrollTo';


const DesktopNav = ({nav, intro}) => {

  const handleNavClick = (item) => {
    if (item.linkType === 'internal') {
      scrollTo(item.internalReference._ref);
    } else if (item.linkType === 'custom') {
      scrollTo(item.customPath); 
    } else if (item.linkType === 'external') {
      window.open(item.href, '_blank');
    }
  };

  return (
    <div className={style.desktopNav} style={{opacity: intro ? 1 : 0, transition: 'opacity 0.5s ease'}}>
    {nav.map((item, index) => (
      <p
        key={index}
        onClick={() => handleNavClick(item)}
        className={style.navItem} 
        style={{ cursor: 'pointer' }}
      >
        {item.title}
      </p>
    ))}
  </div>
  );
};

export default DesktopNav;
