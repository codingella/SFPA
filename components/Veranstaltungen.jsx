import { useState, useEffect } from 'react';
import style from './Home.module.css';
import ToggleableBubble from './Bubble'; // Assuming this component exists
import Content from './elements/Content'; // Assuming this component exists
import { formatDateRange } from '../helpers/date-formatting'; // Assuming this function exists
import { scrollTo } from '../helpers/scrollTo'; // Assuming this function exists


const Veranstaltungen = ({ data }) => {
  const [bubbleIndex, setBubbleIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [years, setYears] = useState([]);
  const [visible, setVisible] = useState(true);
  const currentDate = new Date(); // Get the current date

  // Extract unique years from data and set the latest year as the selected year
  useEffect(() => {
    const allYears = new Set();
    data.forEach(item => {
      if (item.date) {
        const year = new Date(item.date).getFullYear();
        allYears.add(year);
      }
    });

    const sortedYears = Array.from(allYears).sort((a, b) => b - a); // Sort years in descending order
    setYears(sortedYears);
    setSelectedYear(sortedYears[0]); // Set the latest year as default
  }, [data]);

  const handleToggleBubble = (index, id) => {
    if (bubbleIndex !== index) {
      setBubbleIndex(index);
      setTimeout(() => {
        scrollTo(id);
      }, 300);
    } else {
      setBubbleIndex(null);
    }
  };

  const handleYearClick = (year) => {
    scrollTo('Veranstaltungen'); // Scroll to top

    setTimeout(() => {
      setVisible(false); // Reset fade-out
    }, 500); // Set a delay before switching to the next year's events

    setTimeout(() => {
      setSelectedYear(year); // Change the year after fade-out
    }, 900); // Set a delay before switching to the next year's events

    setTimeout(() => {
      setVisible(true); 
    }, 1000); // Set a delay before switching to the next year's events
  };

  // Filter data based on the selected year
  const filteredData = data.filter(item => {
    if (item.date) {
      const year = new Date(item.date).getFullYear();
      return year === selectedYear;
    }
    return false;
  });

  // If the selected year is the current year, apply special sorting logic
  const isCurrentYear = selectedYear === currentDate.getFullYear();

  let upcomingEvents = [];
  let pastEvents = [];

  if (isCurrentYear) {
    filteredData.forEach(item => {
      const startDate = new Date(item.date);
      const endDate = item.endDate ? new Date(item.endDate) : startDate;
      
      // Check if the event has passed or is upcoming
      if (endDate >= currentDate) {
        upcomingEvents.push(item); // Upcoming event
      } else {
        pastEvents.push(item); // Past event
      }
    });

    // Sort upcoming events by start date (ascending)
    upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Sort past events by start date (ascending)
    pastEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    // For non-current years, simply sort the events by date in ascending order
    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <div className={`${style.veranstaltungen} ${visible ? style.fadeIn : style.fadeOut}`}>
      <div className={`${style.scrollAnchor} ${style.event}`} id={'Veranstaltungen'} />
      <h2 className={style.sectionHeader}>Veranstaltungen</h2>

      {/* Display upcoming events if it's the current year */}
      {isCurrentYear && (
        <>
          {upcomingEvents.map((item, i) => (
            <ToggleableBubble
              key={i}
              id={item._id}
              type={'veranstaltung'}
              isOpen={bubbleIndex === i}
              onToggle={() => handleToggleBubble(i, item._id)}
              hiddenContent={(item.teaser || item.address || item.registration || item.description) ? (
                <>
                  {item.teaser && <Content blocks={item.teaser} />}
                  {item.description && <Content blocks={item.description} />}
                  {item.registration && <Content blocks={item.registration} />}
                  {item.address && <Content blocks={item.address} />}
                </>
              ) : null}
            >
              <p>
                {item.date && <span>{formatDateRange(item.date, item.endDate)}</span>}
                {item.time && <span className={style.time}>{item.time}</span>}
              </p>
              {item.title && <h2>{item.title}</h2>}
            </ToggleableBubble>
          ))}
        </>
      )}

      {/* Display past events if it's the current year */}
      {isCurrentYear && (
        <>
          {pastEvents.length > 0 && <h2 className={style.sectionHeader}>Archiv</h2>}
          {pastEvents.map((item, i) => (
            <ToggleableBubble
              key={i}
              id={item._id}
              type={'veranstaltung'}
              isOpen={bubbleIndex === i}
              onToggle={() => handleToggleBubble(i, item._id)}
              hiddenContent={(item.teaser || item.address || item.registration || item.description) ? (
                <>
                  {item.teaser && <Content blocks={item.teaser} />}
                  {item.description && <Content blocks={item.description} />}
                  {item.registration && <Content blocks={item.registration} />}
                  {item.address && <Content blocks={item.address} />}
                </>
              ) : null}
            >
              <p>
                {item.date && <span>{formatDateRange(item.date, item.endDate)}</span>}
                {item.time && <span className={style.time}>{item.time}</span>}
              </p>
              {item.title && <h2>{item.title}</h2>}
            </ToggleableBubble>
          ))}
        </>
      )}

      {/* For non-current years, just display all events in sorted order */}
      {!isCurrentYear && filteredData.map((item, i) => (
        <ToggleableBubble
          key={i}
          id={item._id}
          type={'veranstaltung'}
          isOpen={bubbleIndex === i}
          onToggle={() => handleToggleBubble(i, item._id)}
          hiddenContent={(item.teaser || item.address || item.registration || item.description) ? (
            <>
              {item.teaser && <Content blocks={item.teaser} />}
              {item.description && <Content blocks={item.description} />}
              {item.registration && <Content blocks={item.registration} />}
              {item.address && <Content blocks={item.address} />}
            </>
          ) : null}
        >
          <p>
            {item.date && <span>{formatDateRange(item.date, item.endDate)}</span>}
            {item.time && <span className={style.time}>{item.time}</span>}
          </p>
          {item.title && <h2>{item.title}</h2>}
        </ToggleableBubble>
      ))}

      {years.length > 1 && (
        <div className={style.pagination}>
          <div className={style.paginationScroll}>
            {years.map(year => (
              <span
                key={year}
                className={`${style.item} ${year === selectedYear ? style.selected : ''}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Veranstaltungen;
