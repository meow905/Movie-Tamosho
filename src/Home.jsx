import { useEffect, useState } from "react";
import Afisha from "./components/Afisha";
import Header from "./components/Header";
import PageOne from "./components/MainpageOne";
import CinemaPage from "./components/CinemaPage"
import EventPage from "./components/EventPage";
import SoonInCinema from "./components/SoonInCinema";
import Footer from "./components/Footer";
import MoviesPage from "./components/MoviesPage"
import PartnerPage from "./components/PartnerPage";
import SurpriseVideo from "./components/SurpiseVideo";
import ContactsPage from "./components/ContactsPage";


export default function Home() {
  const [stateBg, setStateBg] = useState("")
  const [filmName,setFilmName] = useState("")
  const[commentHd,setCommentHd] = useState(null)
  useEffect(()=>{
    console.log(`Первый ${commentHd}`);

  },[commentHd])
  
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
      Кинотеатр: <CinemaPage />,
      Мероприятия: <EventPage />,
      Партнерам : <PartnerPage/>,
      Видеопоздравления: <SurpriseVideo/>,
      Контакты: <ContactsPage/>,
      Войти: <PageOne />,
      "": <PageOne />,
    };
   
    return (
      <div className="md:py-44 lg:px-36 py-0 md:px-12">
        <Header setComment={setCommentHd} />
        <Afisha
          updateBg={setStateBg}
          checkComment={commentHd}
        />
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
