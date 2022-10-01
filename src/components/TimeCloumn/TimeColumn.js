import React from "react";
import "./TimeColumn.css";
import TimeSlot from "../TimeSlot/TimeSlot";

function TimeColume(props) {
  // time Column set Section

  var time = props.time - 1;

  var hrSlot = (props.hrSlot - 1) % 12;
  var minSlot = props.minSlot;

  var timeSlot = hrSlot + ":" + minSlot;
  var ampm = "";

  if (hrSlot === 0) {
    hrSlot = 12;
  }

  if (time < 24) {
    ampm = "AM";
  } else {
    ampm = "PM";
  }

  timeSlot = timeSlot + ampm;

  // END OF TIME SECTION

  // Matrix Section

  const timecolume = new Array(7);
  var i = 0;

  return (
    <div className="time__colume">
      {timecolume.fill(null).map(() => {
        i++;
        return (
          <TimeSlot
            columeCount={i}
            hrSlot={hrSlot}
            minSlot={minSlot}
            ampm={ampm}
            name={timeSlot}
          />
        );
      })}
    </div>
  );
}

export default TimeColume;