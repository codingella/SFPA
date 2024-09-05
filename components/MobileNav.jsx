import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';
import { scrollTo } from '../helpers/scrollTo';


const MobileNav = ({nav, open, setOpen}) => {

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
      <div className={`${style.mobileNav} ${open ? style.active : ''}`}>
      
          {nav.slice().reverse().map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavClick(item)}
              className={style.navItem}
              style={{
                transition: `transform 0.20s ease-out ${(i+1)*0.01}s`,
                transform: open ? `translateY(0)` : `translateY(${(i+1)*100}%)`,
              }} 
            >
              <p>
                {item.title}
              </p>
            </div>
        ))}
    </div>

      <div className={style.overlayBottom}/>
        <div onClick={() => setOpen(!open)} className={style.forum}>
          <p>Forum</p>
      </div>

      <div className={style.overlayTop}/>
        <div onClick={() => setOpen(false)} className={style.forum}>
          <p>Forum</p>
      </div>
  </>
  );
};

export default MobileNav;
