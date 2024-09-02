import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';
import Content from './elements/Content';
import DesktopNav from './DesktopNav';
import Veranstaltungen from './Veranstaltungen';
import Podcasts from './Podcasts';

import { urlFor } from '../helpers/sanity-img-url';


const Home = ({ content }) => {

  console.log(content);

  const { settings, veranstaltungen, podcasts, podcastIntro, abschnitte } = content;

  return (
    <div className={style.Home}>
      <div className={style.logo}>
        Studentisches<br />
        Forum<br />
        Psychoanalyse<br />
        Zürich
      </div>

      {settings?.desktopNav && (
        <DesktopNav nav={settings.desktopNav}/>
      )}

      {veranstaltungen && 
        <Veranstaltungen data={veranstaltungen}/>
      }

      <div className={style.leftColumn}>
      <div className={style.scrollAnchor} id={'Podcasts'}/>
        <h2 className={style.sectionHeader}>Podcast</h2>

        {podcastIntro && (
          <div className={style.podcastIntro}>
            {podcastIntro.introImage && (
              <img
                src={`${urlFor(podcastIntro.introImage)}`}
                alt={'podcast Intro Image'}
              />
            )}
            {podcastIntro.introText && (
              <p className={style.introText}>
                {podcastIntro.introText}
              </p>
            )}
          </div>
        )}

        {podcasts && 
          <Podcasts data={podcasts}/>
        }

        {abschnitte.map((abschnitt, i) => (
          <div className={`${style.abschnitt}`}key={i}>
            <div className={style.scrollAnchor} id={abschnitt._id}/>
            {abschnitt.title &&
              <h2 className={style.sectionHeader}>{abschnitt.title}</h2>
            }
            <div className={`${style.bubble}`}>
              <Content blocks={abschnitt.text}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




