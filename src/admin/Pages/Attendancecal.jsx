import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { LiaLessThanSolid } from "react-icons/lia";
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
  const [data, setData] = useState({ attendance: [], employee: {} });
  const [today, setToday] = useState({});
  const { employee_code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    fetchToday();
  }, [employee_code]);

  async function fetchData() {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await Axios.get(`http://127.0.0.1:8000/api/get_monthly_attendance/${employee_code}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (response.data && response.data.attendance && response.data.attendance.length > 0) {
        const employeeDetails = response.data.attendance[0].employee;
        setData({ ...response.data, employee: employeeDetails });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 401) {
        console.error('User unauthorized. Redirecting to login page...');
        navigate('/login');
      } else {
        console.error('Error:', error);
      }
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
      return { dayClass: "", columnClass: "", status: "" };
    }

    const formattedDate = day.format("DD/MM/YYYY");
    const attendanceData = data.attendance.find(item => item.created_at === formattedDate);

    if (attendanceData) {
      const status = attendanceData.status.charAt(0).toUpperCase() + attendanceData.status.slice(1).toLowerCase();
      const dayClass = status === "Present" ? "present" : "absent";
      const columnClass = status === "Present" ? "present-column" : "absent-column";
      return { dayClass, columnClass, status };
    }

    return { dayClass: "", columnClass: "", status: "" };
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
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};
  return (
    <div className="row">
      <header className="calendar-header">
        <div className="col-12 col-sm-10 d-flex align-items-center">
          <LiaLessThanSolid style={{ width: '50px', fontSize: '35px', color: 'red' }} onClick={handleBACK} />
          
          <h5 className="mb-1" style={{color:'#505050'}}>{capitalizeFirstLetter(data.employee.name)}</h5>
        </div>
        <div className="col-12 col-sm-2 d-flex justify-content-between align-items-center">
          <button onClick={handlePrevMonth}>
            <FaLessThan />
          </button>
          <h2 className="month">
            {dayjs(new Date(currentYear, monthIndex)).format("MMMM YYYY")}
          </h2>
          <button onClick={handleNextMonth}>
            <FaGreaterThan />
          </button>
        </div>
      </header>
       
      <div className="calendar-grid">
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <div key={idx}>
                {i === 0 && (
                  <div className="calendar-day">
                    <p className="ds">
                      {day.format("dddd").toUpperCase()}
                    </p>
                  </div>
                )}
                <div className={`calendar-day ${getCurrentDayStatus(day).columnClass}`}>
                  <p className={`text-sm ${getCurrentDayStatus(day).dayClass}`}>
                    <span className={`day ${getCurrentDayClass(day)}`}>{day.format("DD")}</span>
                    <p>{getCurrentDayStatus(day).status}</p>
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Attendancecal;
