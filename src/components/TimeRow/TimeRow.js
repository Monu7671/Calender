import React, { useState } from 'react'
import "./TimeRow.css";
import TimeColumn from '../TimeCloumn/TimeColumn'

function TimeRow() {
    var timeRow = new Array(48);
    var hrValue = 0;
    var hrSlot = 0;
    var minSlot = 30;
  return (
    <div className='time__row'>
        {timeRow.fill([]).map(() => {
          hrValue++;
          var i = hrValue - 1;
          if (i % 2 === 0) {
            hrSlot++;
            minSlot = 0;
          }else {
            minSlot = 30;
          }
          return ( 
            <TimeColumn
            time={hrValue}
            hrSlot = {hrSlot}
            minSlot = {minSlot}
            
            /> 
          )
        })}
    </div>
    
  )
}

export default TimeRow;