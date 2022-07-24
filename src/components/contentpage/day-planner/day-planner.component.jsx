import { useEffect } from "react";
import { useState } from "react";
import ContentInput from "../contentpageUtils/content-form-input/contentinput.component";
import DayPlannerRow from "../day-planner-components/day-planner-row/dayplanner-row.component";
import "./day-planner.styles.scss";
const newPlanField = {
  plan: "",
};
const DayPlanner = () => {
  const [newPlan, setNewPlan] = useState(newPlanField);
  const [plans, setPlans] = useState({});
  const { plan } = newPlan;
  useEffect(() => {
    document.title = "Day Planner";
    const getPlans = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/plans",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      setPlans(result);
    };

    getPlans();
  }, []);
  const handleNewPlanSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/plans/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(newPlan),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPlan({ ...newPlan, [name]: value });
  };
  return (
    <div className="dayplanner-container">
      <div className="newplan-container">
        <form className="newplan-form" onSubmit={handleNewPlanSubmit}>
          <ContentInput
            type="text"
            name="plan"
            value={plan}
            onChange={handleChange}
            label="New Plan"
          />
          <div className="planbutton-container">
            <button className="addplan-button">Add Plan</button>
          </div>
        </form>
      </div>
      <div className="plantable-container">
        <table className="plan-table">
          <thead>
            <tr>
              <th className="plan-header">Plan</th>
              <th className="delete-header">Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(plans).map((index) => {
              return <DayPlannerRow key={index} objectData={plans[index]} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DayPlanner;
