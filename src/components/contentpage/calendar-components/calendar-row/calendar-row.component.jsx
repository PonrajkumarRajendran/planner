import { useEffect, useState } from "react";
import CalendarDay from "../calendar-day-component/calendar-day.component";
import "./calendar-row.styles.scss";

const initial_values = [0, 0, 0, 0, 0, 0, 0];
const CalendarRow = ({ week, month, year }) => {
  const [weekValues, setWeekValues] = useState(initial_values);
  useEffect(() => {
    let temp_array = [0, 0, 0, 0, 0, 0, 0];
    Object.keys(week).map((day) => {
      const number = week[day];
      temp_array[number] = day;
    });
    setWeekValues(temp_array);
  }, [week]);
  return (
    <tr>
      {weekValues.map((day, dayIndex) => {
        return (
          <CalendarDay
            key={dayIndex}
            dateValue={day}
            month={month}
            year={year}
          />
        );
      })}
    </tr>
  );
};

export default CalendarRow;
