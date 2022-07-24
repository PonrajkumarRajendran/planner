import { Routes, Route } from "react-router-dom";
import SignUp from "./components/authpage/signup/signup.component";
import SignIn from "./components/authpage/signin/signin.component";
import Navigation from "./components/contentpage/navigation/navigation.component";
import TaskBoard from "./components/contentpage/task-board/task-board.component";
import DayPlanner from "./components/contentpage/day-planner/day-planner.component";
import Calendar from "./components/contentpage/calendar/calendar.component";
import Home from "./components/contentpage/home/home.component";
function App() {
  return (
    <Routes>
      <Route path="signUp/" element={<SignUp />} />
      <Route path="signIn/" element={<SignIn />} />
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="taskboard" element={<TaskBoard />} />
        <Route path="dayplanner" element={<DayPlanner />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
