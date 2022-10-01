import React from "react";
import "./Header.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Header() {
  return (
    <div class="header__section">
      <div className="header__title">
        <h1>Timeline</h1>
      </div>

      <div className="header__days__section">
        <div className="week">
          {/* calender icon */}
          <div className="week__title">
            
              <p>Week</p>
          
          </div>

          <div className="week__button">
            <p><ArrowDropDownIcon /></p>
          </div>
        </div>
        <div className="current__days__value">
          <div className="days__value">
            <p>
              <p>10 - 16</p>
            </p>
          </div>
          <div className="month__value">
            <p>December,</p>
          </div>
          <div className="year__value">
            <p>2019</p>
          </div>
          <div className="days__button">
            <button className="button1">
            <ChevronLeftIcon />
            </button>

            <button className="button2">
            <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;