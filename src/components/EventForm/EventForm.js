import React from "react";
import "./EventForm.css";

function EventFrom(props) {

  let colorClass = "event__form";
  if (props.color !== "") {
    colorClass = "event__form" + " " + props.color;
  }
  return (
    <div className={colorClass}>
      <div className="event__details">
        <div className="event__title">
          <p>{props.title}</p>
        </div>
      </div>

      <div className="event__time">
        <p>{props.hrSet1}:{props.minSet1} {props.ampmSet1} - {props.hrSet2}:{props.minSet2} {props.ampmSet2}</p>
      </div>
    </div>
  );
}

export default EventFrom;