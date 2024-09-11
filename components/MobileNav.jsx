import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';
import { scrollTo } from '../helpers/scrollTo';


const MobileNav = ({nav, open, setOpen, intro}) => {

  const handleNavClick = (item) => {
    setOpen(false);

    if (item.linkType === 'internal') {
      scrollTo(item.internalReference._ref);
    } else if (item.linkType === 'custom') {
      scrollTo(item.customPath); 
    } else if (item.linkType === 'external') {
      window.open(item.href, '_blank');
    }
  };

  return (
    <>
      <div className={`${style.mobileNav} ${open ? style.active : ''}`} style={{opacity: intro ? 1 : 0}}>
      
          {nav.slice().reverse().map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavClick(item)}
              className={style.navItem}
              style={{
                transition: open ? `transform 0.30s ease-out ${(i+1)*0.01}s, color 0.2s ease 0.1s` : `transform 0.30s ease-out ${(nav.length-i)*0.01}s, color 0.2s ease`,
                transform: open ? `translateY(0)` : `translateY(${(i+1)*100}%)`,
                color: open ? `black` : `#E8E7E7`,
              }} 
            >
              <p>
                {item.title}
              </p>
            </div>
        ))}

        
      <div onClick={() => setOpen(false)}className={style.overlayTop}/>
      </div>

      <div className={style.overlayBottom}/>
        <div onClick={() => setOpen(!open)} className={style.forum}>
          <p>Forum</p>
      </div>

  </>
  );
};

export default MobileNav;
