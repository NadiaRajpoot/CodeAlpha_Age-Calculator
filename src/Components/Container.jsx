import React, { useState } from "react";
import "./Container.css";
// import {DatePicker} from 'antd';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Container(props) {
  const [birthdate, setBirthdate] = useState("");
  const [year, setyear] = useState(0);
  const [month, setmonth] = useState(0);
  const [date, setdate] = useState(0);

  const calculateAge = () => {
    let monthdiff, datediff;
    const today = new Date();
    const dateOfbirth = new Date(birthdate);

    let current_year = today.getFullYear();
    let birth_year = dateOfbirth.getFullYear();

    let current_month = today.getMonth();
    let birth_month = dateOfbirth.getMonth();

    let current_date = today.getDate();
    let birth_date = dateOfbirth.getDate();

    let yearDiff = current_year - birth_year;
   
    if (current_month >= birth_month) {
      monthdiff = current_month - birth_month;
    } else {
      yearDiff--;
      monthdiff = 12 + current_month - birth_month;
    }

    if (current_date >= birth_date) {
      datediff = current_date - birth_date;
    } else {
      monthdiff--;
      datediff =
        getDaysInMonth(birth_year, birth_month) + current_date - birth_date;
    }

    if (monthdiff < 0) {
      monthdiff = 11;
      yearDiff--;
    }

    console.log(yearDiff, monthdiff, datediff);

    setyear(yearDiff);
    setmonth(monthdiff);
    setdate(datediff);

    function getDaysInMonth(year, month) {
      console.log(new Date(year, month, 0).getDate());
      return new Date(year, month, 0).getDate();
    }
  };
  return (
    <div className="main-container" data-theme={props.theme}>
      <div className="container">
        <div className="container-header">
          <h1 className="container-title">Calculate Your Age</h1>
          <p className="container-dec">
            Uncover the essence of time with our age calculator - your gateway
            to precision in moments!.
          </p>
        </div>

        <div className="container-input">
          <DatePicker
            wrapperClassName="datePicker"
            onChange={(date) => setBirthdate(date)}
            selected={birthdate}
            placeholderText="Select date"
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
          />

          <button
            disabled={!birthdate}
            className="calcage"
            onClick={calculateAge}
          >
            Calculate Age
          </button>
        </div>

        <div className={`${date === 0 ? "hidden" : "continer-display"}`}>
          <div className="age">
            <h3>
              Hey, You are <span>{year}</span> years, <span>{month}</span>{" "}
              month and <span>{date} </span> days Old!
            </h3>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
