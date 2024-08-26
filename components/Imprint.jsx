import { useState, useEffect} from "react";
import React from 'react';
import style from './Home.module.css';
import Content from './elements/Content';
import Link from 'next/link'


const Imprint = ({content}) => {

    return (
      <div className={`${style.page}`}>

        <Link href={'/'} className={style.back}><img src='/arrow.svg'/><span>Zurück</span></Link>
        <div className={`${style.content} ${style.legal}`}>
          {
          content &&
            <Content blocks={content}/>
          }
        </div>

      </div>
    );
  };
  
  export default Imprint;


