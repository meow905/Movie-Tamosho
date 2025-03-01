import { useEffect, useState } from "react";
import Afisha from "./components/Afisha";
import Header from "./components/Header";
import PageOne from "./components/MainpageOne";
import CinemaPage from "./components/CinemaPage"
import EventPage from "./components/EventPage";
import SoonInCinema from "./components/SoonInCinema";
import Footer from "./components/Footer";
import MoviesPage from "./components/MoviesPage"


export default function Home() {
  const [stateBg, setStateBg] = useState("")
  const [filmName,setFilmName] = useState("")
   useEffect(()=>{
    setFilmName("")
   },[stateBg])

   useEffect(()=>{
     if (stateBg !== "Афиша") {
      setFilmName("")
     }
   },[stateBg])
  
    const pages = {
      Афиша: <PageOne setFilmName={setFilmName} setStateBg={setStateBg} />,
      Сеансы: <PageOne />,
      Кинотеатр: <CinemaPage />,
      Мероприятия: <EventPage />,
      Войти: <PageOne />,
      "": <PageOne />,
    };
   
    return (
      <div className="md:py-44 lg:px-36 py-0 md:px-12">
        <Header />
        <Afisha updateBg={setStateBg} />
        {filmName !== "" ? (
          <MoviesPage filmName={filmName} setFilmName={setFilmName} />
        ) : (
          <div className="bg-white">
            {pages[stateBg]}
            {stateBg == "Афиша" && <SoonInCinema />}
          </div>
        )}
        <Footer />
      </div>
    );
}
