export function formatDateRange(dateString, endDateString) {
  // Create a new Date object from the input date string
  const date = new Date(dateString)

  // Define an array of German month abbreviations
  const germanMonthNames = [
    'Jan.',
    'Feb.',
    'März',
    'Apr.',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sep.',
    'Okt.',
    'Nov.',
    'Dez.',
  ]

  // Extract the day, month, and year from the start date
  const day = date.getDate()
  const month = date.getMonth() // 0-based index
  const year = date.getFullYear()

  // If endDateString is not provided, return the formatted start date
  if (!endDateString) {
    return `${day}. ${germanMonthNames[month]} ${year}`
  }

  // Create a new Date object from the end date string
  const endDate = new Date(endDateString)

  // Extract the day, month, and year from the end date
  const endDay = endDate.getDate()
  const endMonth = endDate.getMonth() // 0-based index
  const endYear = endDate.getFullYear()

  // If start and end date are in the same year and month
  if (year === endYear && month === endMonth) {
    return `${day}. — ${endDay}. ${germanMonthNames[month]} ${year}`
  }

  // If start and end date are in the same year but different months
  if (year === endYear) {
    return `${day}. ${germanMonthNames[month]} — ${endDay}. ${germanMonthNames[endMonth]} ${year}`
  }

  // If start and end date are in different years
  return `${day}. ${germanMonthNames[month]} ${year} — ${endDay}. ${germanMonthNames[endMonth]} ${endYear}`
}
