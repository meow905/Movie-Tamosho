import SoonInCinema from "./SoonInCinema";
import { arrayOne } from "./arrayOne";
import YouTube from "react-youtube";

export default function MoviesPage({ filmName, setFilmName }) {
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };
  const selectedMovie = arrayOne.find((movie) => movie.textH2 === filmName);
  return (
    <div className="bg-white text-black">
      <button onClick={()=>setFilmName("")} className="text-black font-semibold text-xl cursor-pointer px-10 my-2 py-2 bg-yellow-400">
        Назад
      </button>
      {selectedMovie && (
        <div className="flex md:gap-10 gap-5 py-5 px-10 flex-wrap ">
          <img
            className="md:w-[400px] w-[200px] object-cover"
            src={selectedMovie.img}
            alt={selectedMovie.textH2}
          />
          <div className="flex flex-col">
            <ul className="flex gap-3 flex-wrap">
              <li className="bg-slate-200 p-1 rounded-md">
                {selectedMovie.genre1}
              </li>
              <li className="bg-slate-200 p-1 rounded-md">
                {selectedMovie.genre2}
              </li>
              {selectedMovie.genre3 !== "" && (
                <li className="bg-slate-200 p-1 rounded-md">
                  {selectedMovie.genre3}
                </li>
              )}
            </ul>
            <h2 className="md:text-6xl text-3xl font-semibold py-2">
              {selectedMovie.textH2}
            </h2>
            <div className="flex gap-2 py-5 flex-wrap">
              <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                <li className="text-center">{selectedMovie.time1}</li>
                <li className="bg-white">{selectedMovie.price1}</li>
              </ul>
              {selectedMovie.time2 && selectedMovie.price2 !== "" && (
                <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                  <li className="text-center">{selectedMovie.time2}</li>
                  <li className="bg-white">{selectedMovie.price2}</li>
                </ul>
              )}
              {selectedMovie.time3 && selectedMovie.price3 !== "" && (
                <ul className="w-max rounded-sm border-[1px] border-yellow-500 bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all">
                  <li className="text-center">{selectedMovie.time3}</li>
                  <li className="bg-white">{selectedMovie.price3}</li>
                </ul>
              )}
            </div>
            <div className="video-container w-[100%] max-w-[800px]">
              <YouTube videoId={selectedMovie.urlKey} opts={opts} />
              {/* {https://youtu.be/tTwFeGArcrs} */}
            </div>
          </div>
        </div>
      )}
      <SoonInCinema />
    </div>
  );
}