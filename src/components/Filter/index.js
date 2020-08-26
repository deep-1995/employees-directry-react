import React from "react";
import "./style.css";
function Filter(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h3>Filter by Department</h3>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row center-content">
        {props.btnOptions.length ? (
          props.btnOptions.map((btn) => (
            <button
              className="btn btn-primary"
              key={btn.name}
              value={btn.value}
              onClick={(e) => props.handleClick(e)}
            >
              {btn.name}
            </button>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Filter;
