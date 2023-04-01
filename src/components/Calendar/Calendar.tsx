import { api } from "@/utils/api";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const GeneralCalendar = () => {
  const [value, onChange] = useState<Date>(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  const monthIndexEntries = api.calendar.getMonthIndexEntries.useQuery({
    year: selectedYear,
    month: selectedMonth as string,
  });

  console.log(monthIndexEntries.data)

  return (
    <>
      <style global jsx>{`
        .react-calendar__tile {
          height: 48px;
          width: 48px;
          padding: 12px;
          position: relative;
          border: 1px solid #565656;
          border-radius: 8px;
        }
        .react-calendar__tile--active {
          background: #ffffff11;
        }

        .react-calendar__tile abbr {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .react-calendar__tile--now {
          background: #ffffff11;
          border-radius: 12px;
        }

        .react-calendar__month-view__days__day--weekend {
          color: #f37e7e;
        }
      `}</style>

      <Calendar
        tileDisabled={() => true}
        tileContent={({ date, view }) => {
          // TODO: Add this if day was positive index
          if (1 !== 1) {
            return (
              <div className="absolute left-[50%] top-[50%] z-[1] h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-green-500/10"></div>
            );
          } else if (false) {
            return (
              <div className="absolute left-[50%] top-[50%] z-[1] h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-green-500/10"></div>
            );
          } else {
            return null;
          }
        }}
        onViewChange={(a) => console.log("View changed", a)}
        minDetail={"month"}
        className={styles.calendar}
      />
    </>
  );
};

export default GeneralCalendar;
