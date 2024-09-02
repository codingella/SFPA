import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';

const ToggleableBubble = ({ type, children, hiddenContent, isOpen, onToggle, id }) => {
    const [hiddenHeight, setHeight] = useState(0);
    const hiddenRef = useRef(null);
  
    // Function to update the hidden content's height
    const updateHeight = () => {
      if (hiddenRef.current) {
        setHeight(hiddenRef.current.clientHeight);
      }
    };
  
    // Update height only when the bubble is about to open
    useEffect(() => {
      if (isOpen) {
        updateHeight();
      }
    }, [isOpen]);
  
    const outerDivOnClick = type !== 'veranstaltung' || !isOpen ? onToggle : undefined;
  
    return (
      <div
        className={`${style.bubble} ${style[type]} ${isOpen ? style.visible : ''}`}
        onClick={outerDivOnClick}
      >
        <div className={style.scrollAnchor} id={id}/>
        {children}
        <div
          className={`${style.hidden}`}
          style={{ height: isOpen ? hiddenHeight : 0 }}
        >
          <div ref={hiddenRef} className={style.hiddenWrapper}>
            {hiddenContent}
          </div>
        </div>
        {type === 'veranstaltung' && (
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

  export default ToggleableBubble