import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import big1 from "../assets/big-1.jpg"
import big2 from "../assets/big-2.jpg"


export default function CinemaPage() {
  return (
    <div className="bg-neutral-100 pt-5">
      <div className="py-5 px-8 bg-white mx-10 mb-5 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-semibold">Кохи Навруз</h1>
        <p>Проспект Исмоили Сомони, 14/2</p>
      </div>
      <div className="bg-white py-5 px-8">
        <h1 className="text-4xl font-semibold">О кинотеатре</h1> <br />
        <p className="text-xl text-neutral-600 leading-8 pb-6">
          Кинотеатр «Навруз» на 208 мест. <br /> <br /> Самый большой экран в
          стране, высококачественное изображение и звук. <br /> <br /> Зал
          отличается концепцией, дизайном и той идеей, которая воплощается в
          элементах интерьера. <br /> - Звук Dolby (США) <br /> - Проекторы
          Barco 4K (Бельгия) <br /> - Кресла Ferco (Малайзия) <br /> -
          Увеличенное расстояние между рядами кресел <br /> <br /> В кинотеатре
          мы выделили VIP-зону в отдельной ложе из 12 мест, оборудованных по
          самым высоким международным стандартам. <br /> <br /> Зал максимально
          удобен, с увеличенной шириной проходов между рядами кресел до 2,5 м.
          Все детали интерьера изготовлены из высококачественных и экологичных
          материалов и отвечают всем требованиям пожарной безопасности. <br />{" "}
          <br /> Бар кинотеатра предлагает гостям широкий выбор самого вкусного
          попкорна: карамельный, сырный, сладкий, соленый и фруктовый.
          Разнообразные напитки: соки, вода, продукция компаний Coca-Cola,
          RC-Cola, Pepsi, слаш. Любой зритель сможет найти снеки на свой вкус:
          чипсы, мармелад, начос, протеиновые батончики и даже сладости с
          натуральным составом.
        </p>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src={big1} alt="big-1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={big2} alt="big-2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
