import "./App.css";
import Activity from "./components/Activity";
import imgProfile from "./images/image-jeremy.png";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [selectTitle, setSelectTitle] = useState("weekly");
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectTitle(value);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="grid-layout">
          <div className="user row-2">
            <div className="profile">
              <div className="img">
                <img src={imgProfile} alt="profile" />
              </div>
              <div className="text">
                <p className="report-for">Report for</p>
                <h1 className="name">Jeremy Robson</h1>
              </div>
            </div>
            <div className="controller">
              <ul className="lists">
                <li>
                  <label htmlFor="daily">Daily</label>
                  <input
                    name="time"
                    id="daily"
                    type="radio"
                    value="daily"
                    onChange={handleSelect}
                  />
                </li>
                <li>
                  <label htmlFor="weekly">Weekly</label>
                  <input
                    name="time"
                    id="weekly"
                    type="radio"
                    value="weekly"
                    onChange={handleSelect}
                    defaultChecked
                  />
                </li>
                <li>
                  <label htmlFor="monthly">Monthly</label>
                  <input
                    name="time"
                    id="monthly"
                    type="radio"
                    value="monthly"
                    onChange={handleSelect}
                  />
                </li>
              </ul>
            </div>
          </div>
          {data.map(
            (
              {
                title,
                timeframes: {
                  [selectTitle]: { current, previous },
                },
              },
              idx
            ) => (
              <Activity
                key={idx}
                categorie={title}
                hours={current}
                prevHours={previous}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
