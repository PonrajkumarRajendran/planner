import { useEffect, useState } from "react";
import EventBlock from "../eventblock/eventblock.component";
import TaskBlock from "../taskblock/taskblock.component";
import "./calendar-day.styles.scss";
const CalendarDay = ({ dateValue, month, year }) => {
  const [dayValue, setDayValue] = useState("");
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (dateValue > 0) {
      if (dateValue > 9) {
        if (month > 8) {
          setDayValue(`${year}-${month + 1}-${dateValue}`);
        } else {
          setDayValue(`${year}-0${month + 1}-${dateValue}`);
        }
      } else {
        if (month > 8) {
          setDayValue(`${year}-${month + 1}-0${dateValue}`);
        } else {
          setDayValue(`${year}-0${month + 1}-0${dateValue}`);
        }
      }
    }
  }, [dateValue]);
  useEffect(() => {
    const reqBody = {
      date: dayValue,
    };
    const fetchData = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/events",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
          body: JSON.stringify(reqBody),
        }
      );
      const result = await response.json();
      setEvents(result);
    };
    const fetchTask = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/tasks/fetch",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
          body: JSON.stringify(reqBody),
        }
      );
      const result = await response.json();
      setTasks(result);
    };
    fetchData();
    fetchTask();
  }, [dayValue]);

  return dateValue ? (
    <td className="calendar-row-date">
      <span className="calendar-row-date-value">{dateValue}</span>
      {events.map((event) => {
        return (
          <EventBlock
            value={event.eventTitle}
            importance={event.eventImportance}
            id={event._id}
            key={event}
          />
        );
      })}
      {tasks.map((task) => {
        return (
          <TaskBlock
            key={task}
            value={task.title}
            tabName={task.tabName}
            description={task.description}
          />
        );
      })}
    </td>
  ) : (
    <td></td>
  );
};

export default CalendarDay;
