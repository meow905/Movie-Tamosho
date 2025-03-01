import React, { useState } from "react";

const getWeekDates = () => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months =[
    " Января",
    " Февраля",
    " Марта",
    " Апреля",
    " Мая",
    " Июня",
    " Июля",
    " Августа",
    " Сентября",
    " Октября",
    " Ноября",
    " Декабря",
  ]
  const result = [];

  for (let i = 2; i < 6; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i); 

    result.push({
      day: days[date.getDay()], 
      date: date.getDate() + '' + months[date.getMonth()] 
    });
  }

  return result;
};

const WeekDates = ()=> {
  const [color,SetColor] = useState("today")
  const weekDates = getWeekDates()
  return (
    <div className="bg-gray-200 border-[1px] border-solid border-gray-300 py-2 md:px-5 sticky top-0 z-10">
      <ul className="flex gap-2 items-center text-nowrap overflow-x-auto">
        <button
          onClick={() => {
            SetColor("today");
          }}
          className={
            color == "today"
              ? "bg-yellow-400 py-1 px-2 rounded-2xl border-2 border-solid border-yellow-400 transition-all"
              : "bg-white py-1 px-2 rounded-2xl border-2 border-solid hover:border-yellow-400 box-border transition-all"
          }
        >
          Сегодня
        </button>
        <button
          onClick={() => {
            SetColor("tomorrow");
          }}
          className={
            color == "tomorrow"
              ? "bg-yellow-400 py-1 px-2 rounded-2xl border-2 border-solid  border-yellow-400 transition-all"
              : "bg-white py-1 px-2 rounded-2xl border-2 border-solid hover:border-yellow-400 box-border transition-all"
          }
        >
          Завтра
        </button>
        {weekDates.map(({ day, date }) => (
          <button
            className={
              color == date
                ? "bg-yellow-400 py-1 px-2 rounded-2xl border-2 border-solid border-yellow-400 transition-all"
                : "bg-white py-1 px-2 rounded-2xl border-2 border-solid hover:border-yellow-400 box-border transition-all"
            }
            key={date}
            onClick={() => SetColor(date)}
          >
            {day}: {date}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default WeekDates;

