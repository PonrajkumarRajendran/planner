import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.styles.scss";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "HOME";
  }, []);
  const redirect = (value) => {
    navigate(`/${value}`);
  };

  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="intro-left">
          <div className="intro-left-contents">
            <span
              onClick={() => redirect("taskboard")}
              className="intro-left-header"
            >
              TASK BOARD.
            </span>
            <span className="intro-left-content">
              List things you need to do, to get where you want to go. Consider
              this a roadmap of sorts, cross towns such as{" "}
              <span className="content-thick">"TO-DO"</span> and{" "}
              <span className="content-thick">"DOING"</span> to reach the
              <span className="content-thick">"COMPLETED"</span> destination.
            </span>
            <span className="intro-left-content">
              Try adding a few tasks and move them across the board. Come on it
              won't affect anything other than your attitude towards work.
            </span>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-image taskboard-image-1"></div>
          <div className="intro-image taskboard-image-2"></div>
          <div className="intro-image taskboard-image-3"></div>
        </div>
      </div>
      <div className="intro-container">
        <div className="intro-left">
          <div className="intro-left-contents">
            <span
              onClick={() => redirect("dayplanner")}
              className="intro-left-header"
            >
              PLANNER.
            </span>
            <span className="intro-left-content">
              Let us be honest, putting things here won't make them{" "}
              <span className="content-thick">DONE.</span> You have to work on
              them.
            </span>
            <span className="intro-left-content">
              Break down the task board further with smaller daily plans here.
            </span>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-image dayplanner-image-1"></div>
          <div className="intro-image dayplanner-image-2"></div>
          <div className="intro-image dayplanner-image-3"></div>
        </div>
      </div>
      <div className="intro-container">
        <div className="intro-left">
          <div className="intro-left-contents">
            <span
              onClick={() => redirect("calendar")}
              className="intro-left-header"
            >
              CALENDAR.
            </span>
            <span className="intro-left-content">
              Have a meeting that you want to remember? Someone's birthday? Task
              deadline approaching and the piling task list doesn't allow you to
              see it? Look here, we have color coded event reminders.
            </span>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-image calendar-image-1"></div>
          <div className="intro-image calendar-image-2"></div>
          <div className="intro-image calendar-image-3"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
