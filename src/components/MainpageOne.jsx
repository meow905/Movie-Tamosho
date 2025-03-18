import { useEffect, useState } from "react";
import {arrayOne} from "./arrayOne"

export default function PageOne({ setFilmName}) {
  const [data, setData] = useState("");
  useEffect(() => {
    if (setFilmName) {
      setFilmName(data);
    }
  }, [data, setFilmName]);
  console.log(data);

  return (
    <div className="flex flex-wrap lg:gap-8 md:gap-4 lg:px-14 md:px-5 px-2 py-5">
      {arrayOne.map((data) => {
        return (
          <div
            key={data.textH2}
            className="flex flex-grow items-start md:flex-col flex-row gap-4 cursor-pointer md:mb-0 mb-5"
          >
            <div
              onClick={() => {
                setData(data.textH2);
              }}
              className="lg:w-[250px] md:w-[300px] w-[100px] overflow-hidden rounded-lg"
            >
              <img
                src={data.img}
                alt="movie-1"
                className="hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2
                onClick={() => {
                  setData(data.textH2);
                }}
                className="md:text-3xl text-xl font-semibold md:w-52 w-40 hover:text-red-500 transition-all"
              >
                {data.textH2}
              </h2>
              <ul className="flex gap-2 flex-wrap md:w-48 w-36">
                <li className="bg-slate-200 p-1 rounded-md">{data.rating}</li>
                <li className="bg-slate-200 p-1 rounded-md">{data.genre1}</li>
                <li className="bg-slate-200 p-1 rounded-md">{data.genre2}</li>
                {data.genre3 !== "" && (
                  <li className="bg-slate-200 p-1 rounded-md">{data.genre3}</li>
                )}
              </ul>

              <div className="flex gap-2 flex-wrap w-full">
                <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                  <li className="text-center">{data.time1}</li>
                  <li className="bg-white">{data.price1}</li>
                </ul>
                {data.time2 && data.price2 !== "" && (
                  <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                    <li className="text-center">{data.time2}</li>
                    <li className="bg-white">{data.price2}</li>
                  </ul>
                )}
                {data.time3 && data.price3 !== "" && (
                  <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                    <li className="text-center">{data.time3}</li>
                    <li className="bg-white">{data.price3}</li>
                  </ul>
                )}
              </div>
              <p>{data.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}