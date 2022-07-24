import { useState } from "react";
import { useEffect } from "react";
import CalendarRow from "../calendar-components/calendar-row/calendar-row.component";
import CalendarMonthSelector from "../calendar-components/calendar-month-selector/calendar-month-selector.component";
import ContentAddButton from "../contentpageUtils/content-add-button/content-add-button.component";
import { months } from "../calendar-components/calendar-utils/calendar.utils";
import AddEventModal from "../calendar-components/addeventmodal/addeventmodal.component";
import "./calendar.styles.scss";
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [monthValue, setMonthValue] = useState();
  const [currentYear, setCurrentYear] = useState("");
  const [weekArrays, setWeekArrays] = useState([]);
  const [eventModalClass, setEventModalClass] = useState("");

  useEffect(() => {
    document.title = "Calendar";
    setMonthValue(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  }, []);
  useEffect(() => {
    setCurrentMonth(months[monthValue]);
    const dates = {};
    const firstDate = new Date(currentYear, monthValue, 1).getDate();
    const lastDate = new Date(currentYear, monthValue + 1, 0).getDate();
    for (let i = firstDate; i <= lastDate; i++) {
      dates[i] = new Date(currentYear, monthValue, i).getDay();
    }
    let weeks = [];
    let temp_week = {};
    let count = 0;
    let day_count = 0;
    Object.keys(dates).map((date) => {
      day_count += 1;
      temp_week[date] = dates[date];
      if (dates[date] === 6) {
        weeks.push(temp_week);
        temp_week = [];
        count += 1;
      } else if (day_count === lastDate) {
        weeks.push(temp_week);
      }
    });
    setWeekArrays(weeks);
  }, [monthValue]);

  const handleToggleClick = (value) => {
    if (value === "previous") {
      if (currentMonth !== "January") {
        setMonthValue(monthValue - 1);
      } else {
        setMonthValue(11);
        setCurrentYear(currentYear - 1);
      }
    } else {
      if (currentMonth !== "December") {
        setMonthValue(monthValue + 1);
      } else {
        setMonthValue(0);
        setCurrentYear(currentYear + 1);
      }
    }
  };
  const handleAddClick = () => {
    setEventModalClass("addeventmodal-visible");
  };
  const modalCloseFunction = () => {
    setEventModalClass("");
  };
  return (
    <div className="calendar-container">
      <AddEventModal
        classValue={eventModalClass}
        closeFunction={modalCloseFunction}
      />
      <div className="calendar-header-container">
        <CalendarMonthSelector
          handleToggleClick={handleToggleClick}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
        <ContentAddButton
          className="calendar-event-add-button"
          buttonFunction={handleAddClick}
          buttonName={"New Event"}
        />
      </div>

      <table className="calendar-table">
        <thead>
          <tr>
            <th className="weekend-header">Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th className="weekend-header">Sat</th>
          </tr>
        </thead>
        <tbody>
          {weekArrays.map((week, weekIndex) => {
            return (
              <CalendarRow
                key={weekIndex + 1}
                week={week}
                month={monthValue}
                year={currentYear}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
