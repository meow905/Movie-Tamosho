import { useEffect, useState } from "react";
import {arrayOne} from "./arrayOne"
import TicketBox from "./miniComponents/ticketBox";


export default function PageOne({setFilmName}) {
  const [data, setData] = useState("");
  
  

  useEffect(() => {
    if (setFilmName) {
      setFilmName(data);
    }
  }, [data, setFilmName]);
 



  return (
    <div className="flex flex-wrap lg:gap-8 md:gap-4 lg:px-14 md:px-5 px-2 py-5">
      {arrayOne.map((data) => {
        return (
          <div
            key={data.textH2}
            className="flex  items-start md:flex-col flex-row gap-4 cursor-pointer md:mb-0 mb-5"
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

             <TicketBox data={data}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}