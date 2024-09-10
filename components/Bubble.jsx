import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';

const ToggleableBubble = ({ type, children, hiddenContent, isOpen, onToggle, id }) => {
    const [hiddenHeight, setHeight] = useState(0);
    const hiddenRef = useRef(null);

    console.log(isOpen);
  
    useEffect(() => {
      const updateHeight = () => {
        if (hiddenRef.current) {
          setHeight(hiddenRef.current.clientHeight);
        }
      };
    
      const handleResize = () => {
        updateHeight(); // Trigger height update on screen resize
      };
    
      if (isOpen && hiddenContent) {
        updateHeight(); // Initial height update when the bubble opens
    
        window.addEventListener('resize', handleResize); // Add resize listener
      }
    
      // Clean up: Remove the event listener when the bubble is closed
      return () => {
        if (isOpen && hiddenContent) {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, [isOpen, hiddenContent]);
  
    const outerDivOnClick = hiddenContent ? onToggle : undefined;
  
    return (
      <div
        className={`${style.bubble} ${style[type]} ${isOpen ? style.visible : ''}`}
        onClick={outerDivOnClick}
      >
        <div className={style.scrollAnchor} id={id}/>
        {children}
        {hiddenContent && (
          <div
            className={`${style.hidden}`}
            style={{ height: isOpen ? hiddenHeight : 0 }}
          >
            <div ref={hiddenRef} className={style.hiddenWrapper}>
              {hiddenContent}
            </div>
          </div>
        )}
        {type === 'veranstaltung' && hiddenContent &&(
          <p className={style.indicator}>
            <span
              style={{ display: isOpen ? 'inline-block' : 'none' }}
              onClick={onToggle}
              className={style.weniger}
            >
              Weniger
            </span>
            <span 
              style={{ display: isOpen ? 'none' : 'inline-block' }}
              className={style.mehr}>
              Mehr
            </span>
          </p>
        )}
      </div>
    )
}

export default ToggleableBubble;
