import imgEye from "../assets/illuminati (1).png";
import apple from "../assets/app-store.png"
import android from "../assets/google-play.png"

export default function Footer() {
    return (
      <div className="bg-neutral-800 flex md:flex-row flex-col gap-5 justify-between md:items-center items-start lg:px-14 md:px-5 px-2 py-5 ">
        <div className="flex items-center uppercase gap-1 text-white">
          <img className="md:w-16 w-12" src={imgEye} alt="eye" />
          <div>
            <p className="md:text-xs text-xs">Сеть кинотеатров</p>
            <h2 className="md:text-3xl text-2xl font-bold">Тамошо</h2>
          </div>
        </div>
        <div className="flex md:gap-36 gap-28 text-nowrap mr-20">
          <div className="md:w-[50px] w-[40px] text-white  ">
            <a target="_blank"
              href="https://apps.apple.com/us/app/tamosho/id6444792174"
              className="flex items-center gap-2"
            >
              <img src={apple} alt="apple" />
              <div>
                <p>Загрузите в</p>
                <h2>App Store</h2>
              </div>
            </a>
          </div>
          <div className="md:w-[50px] w-[40px] text-white ">
            <a target="_blank"
              href="https://play.google.com/store/apps/details?id=ru.kinoplan.cinema.tamosho"
              className="flex items-center gap-2"
            >
              <img src={android} alt="android" />
              <div>
                <p>Загрузите в</p>
                <h2>Google Play</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}