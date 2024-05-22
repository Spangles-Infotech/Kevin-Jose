import React, { useState, useEffect } from "react";
import Axios from "axios"; // Import Axios
import { useParams } from 'react-router-dom'; // Import useParams
import { LiaLessThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import '../Style/Attendan.css';

function generateMonthArray(year, monthIndex) {
  const currentDate = dayjs().year(year).month(monthIndex);
  const firstDayOfMonth = currentDate.startOf('month');
  const lastDayOfMonth = currentDate.endOf('month');
  const numWeeks = lastDayOfMonth.diff(firstDayOfMonth, 'week') + 1;
  const monthArray = Array.from({ length: numWeeks }, (_, weekIndex) => {
    return Array.from({ length: 7 }, (_, dayIndex) => {
      return firstDayOfMonth.add(weekIndex, 'week').startOf('week').add(dayIndex, 'day');
    });
  });
  return monthArray;
}

function Attendancecal() {
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [data, setData] = useState({}); // Initialize data as an object instead of an array
  const [today, setToday] = useState({}); // Initialize today as an object instead of an array
  const { employee_code } = useParams(); // Use useParams to get the parameter
  const navigate = useNavigate();
  useEffect(() => {
    fetchData(); // Fetch data on component mount
    fetchToday(); // Fetch today's attendance on component mount
  }, [employee_code]);

  async function fetchData() {
    try {
      const response = await Axios.get(`http://127.0.0.1:8000/api/get_monthly_attendance/${employee_code}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchToday() {
    try {
      const response = await Axios.get(`http://127.0.0.1:8000/api/get_today_attendance/${employee_code}/`);
      setToday(response.data);
    } catch (error) {
      console.error("Error fetching today's data:", error);
    }
  }

  function handlePrevMonth() {
    setMonthIndex(prevMonth => {
      const newIndex = prevMonth === 0 ? 11 : prevMonth - 1;
      setCurrentYear(prevYear => newIndex === 11 ? prevYear - 1 : prevYear);
      return newIndex;
    });
  }

  function handleNextMonth() {
    setMonthIndex(prevMonth => {
      const newIndex = prevMonth === 11 ? 0 : prevMonth + 1;
      setCurrentYear(prevYear => newIndex === 0 ? prevYear + 1 : prevYear);
      return newIndex;
    });
  }

  function handleReset() {
    const currentMonth = dayjs().month();
    const currentYear = dayjs().year();
    setMonthIndex(currentMonth);
    setCurrentYear(currentYear);
  }

  function getCurrentDayStatus(day) {
    if (!data || !data.attendance) {
      return { dayClass: "", columnClass: "" };
      
    }

    const formattedDate = day.format("DD/MM/YYYY");
    const attendanceData = data.attendance.find(item => item.created_at === formattedDate);

    if (attendanceData) {
      const status = attendanceData.status.charAt(0).toUpperCase() + attendanceData.status.slice(1).toLowerCase();
      const dayClass = status === "Present" ? "present" : "absent";
      const columnClass = status === "Present" ? "present-column" : "absent-column";
      return { dayClass, columnClass, status };
    }

    return { dayClass: "", columnClass: "" };
  }
  function getCurrentDayClass(day) {
    return day.day() === 0
      ? "current-day sunday" 
      : day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "current-day"
      : "";
  }
  const currentMonth = generateMonthArray(currentYear, monthIndex);
  const handleBACK = () => {
    navigate('/Attendance');
  };
  return (
    <div className="row">
      <header className="calendar-header  m-2">
        <div className="col-sm-10 d-flex mt-5">
          <LiaLessThanSolid  style={{width:'50px',fontSize: '35px', color:'red'}} onClick={handleBACK}/>
          <h1>{today.name}</h1>
        </div>
        <div className="col-sm-2 d-flex">
          <button onClick={handlePrevMonth}>
            <span >
              <FaLessThan className="mt-5" />
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span >
              <FaGreaterThan className="mt-5" />
            </span>
          </button>
          <h2 className="month mt-5">
            {dayjs(new Date(currentYear, monthIndex)).format("MMMM YYYY")}
          </h2>
        </div>
      </header>
      <div className="calendar-grid">
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <header key={idx}>
                {i === 0 && (
                  <div className="calendar-day">
                    <p className="mt-1 ds">
                      {day.format("dddd").toUpperCase()}
                    </p>
                  </div>
                )}
                <div className={`calendar-day ${getCurrentDayStatus(day).columnClass}`}>
                  <p className={`text-sm p-1 my-1 ${getCurrentDayStatus(day).dayClass}`}>
                  <span className={`day m-2 ${getCurrentDayClass(day)}`}>{day.format("DD")}</span>

                    {getCurrentDayStatus(day).status}
                  </p>
                </div>
              </header>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Attendancecal;
