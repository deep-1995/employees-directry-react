import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);

  return (
    <div className="row center-content">
      {props.employees.map((emp) => (
        <div className="card">
          <div className="content">
            <ul key={emp.id}>
              <li>
                <strong>Name:</strong>
                {emp.name}
              </li>
              <li>
                <strong>Department:</strong>
                {emp.department}
              </li>
              <li>
                <strong>location::</strong>
                {emp.loaction}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
