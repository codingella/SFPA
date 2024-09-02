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
      }, 400);
    } else {
      setBubbleIndex(null);
    }
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    scrollTo('Veranstaltungen');
  };

  // Filter data based on the selected year
  const filteredData = data.filter(item => {
    if (item.date) {
      const year = new Date(item.date).getFullYear();
      return year === selectedYear;
    }
    return false;
  });

  return (
    <div className={style.veranstaltungen}>
      <div className={style.scrollAnchor} id={'Veranstaltungen'} />
      <h2 className={style.sectionHeader}>Veranstaltungen</h2>
      {filteredData.map((item, i) => (
        <ToggleableBubble
          key={i}
          id={item._id}
          type={'veranstaltung'}
          isOpen={bubbleIndex === i}
          onToggle={() => handleToggleBubble(i, item._id)}
          hiddenContent={item.description && <Content blocks={item.description} />}
        >
          <p>
            {item.date && (
              <span>{formatDateRange(item.date, item.endDate)}</span>
            )}
            {item.time && (
              <span className={style.time}>{item.time}</span>
            )}
          </p>
          {item.title && <h2>{item.title}</h2>}
        </ToggleableBubble>
      ))}

    {
    years.length > 1 &&
        <div className={style.pagination}>
            <div className={style.paginationScroll}>
            <span>Archiv</span>
            {
            years.map(year => (
            <span
                key={year}
                className={`${style.item} ${year === selectedYear ? style.selected : ''}`}
                onClick={() => handleYearClick(year)}
            >
                {year}
            </span>
            ))
            }
            </div>
        </div>
        }
       
    </div>
  );
};

export default Veranstaltungen;