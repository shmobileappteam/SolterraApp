const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** Monday-first month grid (includes leading/trailing outside-month days). */
export function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (first.getDay() + 6) % 7;
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];

  for (let i = startOffset - 1; i >= 0; i -= 1) {
    const day = prevMonthDays - i;
    cells.push({
      day,
      outside: true,
      date: new Date(year, month - 1, day),
    });
  }

  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push({
      day: d,
      outside: false,
      date: new Date(year, month, d),
    });
  }

  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push({
      day: nextDay,
      outside: true,
      date: new Date(year, month + 1, nextDay),
    });
    nextDay += 1;
  }

  while (cells.length < 42) {
    cells.push({
      day: nextDay,
      outside: true,
      date: new Date(year, month + 1, nextDay),
    });
    nextDay += 1;
  }

  return cells;
}

export function formatMonthYear(year, month) {
  return `${MONTH_NAMES[month]} ${year}`;
}

export function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function chunkWeeks(cells) {
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export { WEEKDAY_LABELS, MONTH_NAMES };
