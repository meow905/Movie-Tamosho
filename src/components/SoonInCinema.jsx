import { arrayTwo } from "./arrayOne";
export default function SoonInCinema() {
    return (
      <div className="bg-[#f8f8f8] lg:px-14 md:px-5 px-2 py-5 ">
        <h1 className="text-3xl font-bold pb-5">Скоро в кино</h1>
        <div className="flex md:flex-wrap flex-nowrap md:gap-6 gap-4 overflow-auto">
          {arrayTwo.map((item) => {
            return (
              <div>
                <div className="lg:w-[200px] w-[100px] overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt="greenBook"
                    className="hover:scale-105 transition-all"
                  />
                </div>
                <h2 className="md:text-2xl text-base w-min">{item.name}</h2>
                <p className="pt-2 text-gray-500">{item.when}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
}