import { useState, useEffect, useRef } from "react";
import React from 'react';
import style from './Home.module.css';
import Content from './elements/Content';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Veranstaltungen from './Veranstaltungen';
import Podcasts from './Podcasts';
import { scrollTo} from '../helpers/scrollTo'; 

import { urlFor } from '../helpers/sanity-img-url';


const Home = ({ content }) => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  const { settings, veranstaltungen, podcasts, podcastIntro, abschnitte } = content;


  useEffect(() => {
    setTimeout(()=> {
      setIntro(true);
    }, 200)
  }, []);

  const resetPage = () => {
    if(window.innerWidth > 1000){
      scrollTo('Veranstaltungen');
      setTimeout(() => {
        scrollTo('Podcasts');
      }, 800)
    }
  }

  return (
    <>
    <div className={style.Home} style={{opacity: intro ? 1 : 0, transition: 'opacity 0.5s ease'}}>
      <div className={style.logo} onClick={resetPage}>
        <img src={'/logo.svg'} alt={'Logo'}/>
      </div>

      {/*<div className={style.logo}>
        Studentisches<br />
        Forum<br />
        Psychoanalyse<br />
        Zürich
      </div>*/}

      {veranstaltungen && 
        <Veranstaltungen data={veranstaltungen}/>
      }

      <div className={style.leftColumn}>
      <div className={`${style.scrollAnchor} ${style.podcasts}`} id={'Podcasts'}/>
        <h2 className={style.sectionHeader}>Podcast</h2>

        {podcastIntro && (
          <div className={style.podcastIntro}>
            {podcastIntro.introImage && (
              <img
                src={`${urlFor(podcastIntro.introImage)}`}
                alt={'podcast Intro Image'}
              />
            )}
            {podcastIntro.description && (
              <div className={style.introText}>
              <Content blocks={podcastIntro.description}></Content>
              </div>
            )}
          </div>
          
        )}

        {podcasts && 
        <>
          <div className={`${style.scrollAnchor}`} style={{position: 'relative'}} id={'firstEpisode'}/>
          <Podcasts data={podcasts}/>
          </>
        }

        {abschnitte?.map((abschnitt, i) => (
          <div className={`${style.abschnitt} ${i == 0 ? style.first : ''}`} key={i}>
            <div className={style.scrollAnchor} id={abschnitt._id}/>
            {abschnitt.title &&
              <h2 className={`${style.sectionHeader}`}>{abschnitt.title}</h2>
            }
            <div className={`${style.bubble}`}>
              <Content blocks={abschnitt.text}/>
            </div>
          </div>
        ))}
      </div>

      {settings?.desktopNav && (
        <DesktopNav nav={settings.desktopNav} intro={intro}/>
      )}
    </div>

     {settings?.mobileNav && (
      <MobileNav open={mobileNavOpen} intro={intro} setOpen={setMobileNavOpen} nav={settings.mobileNav}/>
    )}

    </>
  );
};

export default Home;




