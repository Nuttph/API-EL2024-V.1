import React, { useEffect, useState } from "react";
import { setInterval } from "timers";

const HeaderText = () => {
  const time = new Date();
  function getMonthName(date: number) {
    const monthNames = [
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
    return monthNames[date];
  }
  console.log();
  const [showTime1, setShowTime1] = useState("");
  const ItTime = () => {
    const showTime1 = `${getMonthName(
      time.getMonth()
    )} ${time.getDate()} ${time.getFullYear()}`;
    setShowTime1(showTime1);
  };

  setInterval(ItTime, 1000);

  return (
    <div className="w-full text-[40px] font-bold flex flex-col items-center justify-center">
      <div className="text-blue-400 drop-shadow-lg w-full bg-purple-200 text-center shadow-lg">
        NAP👏
      </div>
      <div className="flex flex-row items-center justify-start w-full px-[10px] text-[20px] font-light mt-2  ">
        <div>{showTime1}</div>
      </div>
      <div className="ml-2 text-red-500 underline">List My Task</div>
    </div>
  );
};

export default HeaderText;
