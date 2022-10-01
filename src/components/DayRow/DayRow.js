import React from 'react';
import TimeRow from '../TimeRow/TimeRow';
import "./DayRow.css";
import Days from '../Days/Days'



function DayRow() {
  return (
    <>
        <div className='days__row'>
        <Days className="sunday" dayName="Sun" />
        <Days dayName="Mon" />
        <Days dayName="Tue" />
        <Days  dayName="Wed"/>
        <Days dayName="Thu" />
        <Days dayName="Fri" />
        <Days className="saturdays" dayName="Sat" />
    </div>

    <div className='time__row'>
         <TimeRow/>
    </div>
    </>
    
    
  )
}

export default DayRow;