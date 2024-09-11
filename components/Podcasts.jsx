import { useState } from 'react';
import style from './Home.module.css';
import ToggleableBubble from './Bubble'; // Assuming this component exists
import { scrollTo } from '../helpers/scrollTo'; // Assuming this function exists
import { urlFor } from '../helpers/sanity-img-url';

const Podcasts = ({ data }) => {
  const [bubbleIndex, setBubbleIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [visible, setVisible] = useState(true);
  const podcastsPerPage = 10; // Number of podcasts per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / podcastsPerPage);

  // Get the podcasts for the current page
  const currentPodcasts = data.slice(
    (currentPage - 1) * podcastsPerPage,
    currentPage * podcastsPerPage
  );

  const handleToggleBubble = (index, id) => {
    if (bubbleIndex !== index) {
      setBubbleIndex(index);
      setTimeout(() => {
        scrollTo(id);
      }, 400);
    } else {
      setBubbleIndex(null);
    }
  };

  const handlePageChange = (newPage) => {
    scrollTo('firstEpisode'); // Scroll to top

    setTimeout(() => {
      setVisible(false); // Reset fade-out
    }, 500); // Set a delay before switching to the next year's events

    setTimeout(() => {
      setCurrentPage(newPage); // Change the year after fade-out
    }, 900); // Set a delay before switching to the next year's events

    setTimeout(() => {
      setVisible(true); 
    }, 1000); // Set a delay before switching to the next year's events
  };

  return (
    <>
      <div className={`${visible ? style.fadeIn : style.fadeOut}`} style={{display: 'contents'}}>
        {currentPodcasts.map((item, i) => (
          
          <ToggleableBubble
            key={i}
            id={item._id}
            type={'podcast'}
            isOpen={bubbleIndex === i}
            onToggle={() => handleToggleBubble(i)}
            hiddenContent={
              item.links && (
                <div className={style.episodeLinks}>
                  <p>Zur Podcast-Folge</p>
                  {item.links.map((link, j) => (
                  <p key={j}>
                    <a key={j} href={link.link}>
                      {link.title}
                    </a>
                  </p>
                  ))}
                </div>
              )
            }
          >
            {item.cover && (
              <div className={style.cover}>
                <img
                  src={`${urlFor(item.cover).width(200).format('webp')}`}
                  alt={`cover-folge-${data.length - (i + 1)}`}
                />
              </div>
            )}
            <div className={style.text}>
              {item.text && <p>{item.text}</p>}
              <p>
                <span>{`Folge ${data.length - i}`}</span>
                {item.duration && <span className={style.duration}>{item.duration}</span>}
              </p>
            </div>
          </ToggleableBubble>
        ))}
      </div>

      {
        totalPages > 1 &&
        <div className={style.pagination}>
        <div className={style.paginationScroll}>
        <span>Weitere Folgen</span>
        {Array.from({ length: totalPages}, (_, index) => (
          <span
            key={index}
            className={`${style.item} ${
              currentPage === index + 1 ? style.selected : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        </div>
      </div>
      }      
    </>
  );
};

export default Podcasts;
