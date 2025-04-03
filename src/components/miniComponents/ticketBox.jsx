import { useState } from "react";
import ChoosePlace from "../miniComponents/choosePlace"
import cinema from "../images/cinema.png"

export default function TicketBox({data}) {
    const [choose,setChoose] = useState(false)
    const [fullDataFilm,setFullDataFilm] = useState({name: "", time1: null,time2:null,time3:null})
    const [timeCheck,setTimeCheck] = useState("")
    const [selected, setSelected] = useState([]);
    // const [ticketCost, setTicketCost] = useState(null)

     const handleClick = (row, col) => {
       const key = `${row}-${col}`;
       setSelected((prev) =>
         prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
       );
     };
   
      document.addEventListener("keydown", (event) => {
        if (event.code == "Escape") {
          setChoose(false);
        }
      });

    return (
      <div>
        <div className="flex gap-2 flex-wrap w-full">
          <ul
            onClick={(e) => {
              if (
                e.target.innerText == data.time1 ||
                e.target.innerText == data.price1
              ) {
                setTimeCheck(data.time1);
                setChoose(true);
                setFullDataFilm((prev) => ({
                  ...prev,
                  name: data.textH2,
                  time1: data.time1,
                  time2: data.time2,
                  time3: data.time3,
                }));
                console.log(fullDataFilm);
              }
            }}
            className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all"
          >
            <li className="text-center">{data.time1}</li>
            <li className="bg-white">{data.price1}</li>
          </ul>
          {data.time2 && data.price2 !== "" && (
            <ul
              onClick={(e) => {
                if (
                  e.target.innerText == data.time2 ||
                  e.target.innerText == data.price2
                ) {
                  setTimeCheck(data.time2);
                  setChoose(true);
                  setFullDataFilm((prev) => ({
                    ...prev,
                    name: data.textH2,
                    time1: data.time1,
                    time2: data.time2,
                    time3: data.time3,
                  }));
                  console.log(e.target);
                }
              }}
              className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all"
            >
              <li className="text-center">{data.time2}</li>
              <li className="bg-white">{data.price2}</li>
            </ul>
          )}
          {data.time3 && data.price3 !== "" && (
            <ul
              onClick={(e) => {
                if (
                  e.target.innerText == data.time3 ||
                  e.target.innerText == data.price3
                ) {
                  setTimeCheck(data.time3);
                  setChoose(true);
                  setFullDataFilm((prev) => ({
                    ...prev,
                    name: data.textH2,
                    time1: data.time1,
                    time2: data.time2,
                    time3: data.time3,
                  }));
                  console.log(e.target);
                }
              }}
              className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all"
            >
              <li className="text-center">{data.time3}</li>
              <li className="bg-white">{data.price3}</li>
            </ul>
          )}
        </div>
        <p>{data.location}</p>
        <ChoosePlace open={choose}>
          <h1 className="text-center pb-9 pt-4 text-3xl relative">
            {fullDataFilm.name}
          </h1>
          <div className="flex gap-5">
            <button
              onClick={() => setTimeCheck(fullDataFilm.time1)}
              className={
                timeCheck == fullDataFilm.time1
                  ? "bg-yellow-400 px-4 py-2 text-xl  rounded-md"
                  : "bg-transparent px-4 py-2 text-xl"
              }
            >
              {fullDataFilm.time1}
            </button>
            <button
              onClick={() => setTimeCheck(fullDataFilm.time2)}
              className={
                timeCheck == fullDataFilm.time2
                  ? "bg-yellow-400 px-4 py-2 text-xl  rounded-md"
                  : "bg-transparent px-4 py-2 text-xl"
              }
            >
              {fullDataFilm.time2}
            </button>
            {fullDataFilm.time3 && (
              <button
                onClick={() => setTimeCheck(fullDataFilm.time3)}
                className={
                  timeCheck == fullDataFilm.time3
                    ? "bg-yellow-400 px-4 py-2 text-xl rounded-md"
                    : "bg-transparent px-4 py-2 text-xl"
                }
              >
                {fullDataFilm.time3}
              </button>
            )}
          </div>
          <div className="flex flex-col gap-0">
            <button
              className="text-xl font-semibold  px-2 py-1  m-auto absolute top-0 right-0  rounded-md text-white"
              onClick={() => setChoose(false)}
            >
              <i className="bx bx-x-circle text-black text-2xl"></i>
            </button>
          </div>
          <form className="py-5 space-y-4" action="">
            <div className="border-2 border-black rounded-md flex justify-center">
              <img width={80} src={cinema} alt="cinema" />
            </div>
            {[...Array(5)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center md:gap-4 gap-2  justify-between"
              >
                <span className="font-bold">{rowIndex + 1}</span>
                {[...Array(10)].map((_, colIndex) => {
                  const key = `${rowIndex}-${colIndex}`;
                  return (
                    <input
                      key={key}
                      className="md:scale-150 scale-110 cursor-pointer"
                      type="radio"
                      checked={selected.includes(key)}
                      readOnly
                      onClick={() => {
                        handleClick(rowIndex, colIndex);
                        setTicketCost(ticketCost);
                      } }
                    />
                  );
                })}
              </div>
            ))}
          </form>
          {/* {ticketCost &&
          <p className="flex justify-center text-xl">{ticketCost} c.</p>
          } */}
          <button
            className="text-xl font-semibold bg-slate-700 px-2 py-1 block m-auto mt-10  rounded-md text-white"
            onClick={() => setChoose(false)}
          >
            Оформить
          </button>
        </ChoosePlace>
      </div>
    );
}