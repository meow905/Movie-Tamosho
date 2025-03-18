import { useContext, useEffect, useState } from "react";
import WeekDates from "./ArrayDates";
import WriteComment from "./miniComponents/writeComment";

const array = [
  "Афиша",
  "Кинотеатр",
  "Мероприятия",
  "Партнерам",
  "Видеопоздравления",
  "Контакты",
  "Войти",
  "Написать отзыв",
];

export default function Afisha({ updateBg ,checkComment}) {
  const [comment, setComment] = useState(false);
  const [bg, setBg] = useState("Афиша");
  const [data, setData] = useState("");
  console.log(`Второй ${comment}`);
  
  useEffect(() => {
    updateBg(bg);
  }, [bg, updateBg]);
  useEffect(()=>{
    if (checkComment != null) {
      
      setComment(checkComment)
    }
  },[checkComment])


  function validComment(e) {
    e.preventDefault();
    if (data !== "") {
      alert(`Ваш отзыв: --${data}--, успешно отправлен!`);
      setComment(false);
    }
  }


  useEffect(() => {
    if (bg == "Написать отзыв") {
      setComment(!comment);
      if (!comment) {
        setBg("");
      }
    }
  }, [bg]);

  return (
    <>
      <ul className="flex items-center text-nowrap overflow-x-auto gap-2 bg-white md:px-5 px-2">
        {array.map((element) => {
          return (
            <li
              key={element}
              className={
                bg == element
                  ? "text-black cursor-pointer px-3 my-2 py-2 border-b-4 border-solid border-yellow-400"
                  : element == "Войти" || element == "Написать отзыв"
                  ? "text-black cursor-pointer px-5 my-2 py-2 bg-yellow-400 ml-4 rounded-full hover:bg-yellow-500 transition-all md:block hidden"
                  : "text-black cursor-pointer px-3 my-2 py-2 border-b-4 border-solid border-transparent hover:border-yellow-400 transition-all"
              }
              onClick={() => setBg(element)}
            >
              {element}
            </li>
          );
        })}
        
        <WriteComment open={comment}>
          <div className="text-black px-8 pb-8 pt-5">
            <h1 className="text-center text-wrap mx-2 text-xl font-semibold px-5 py-2 border-b-[1px] border-solid border-gray-200">
              Написать отзыв
              <i
                onClick={() => {
                  setComment(false);
                } }
                className="bx bx-x-circle absolute top-6 right-10 text-3xl hover:rotate-90 cursor-pointer transition-all"
              ></i>
            </h1>
            <section className="px-10">
              <p className="py-3 text-wrap">
                Поделитесь своими впечатлениями от похода в наш кинотеатр.
                <br /> Ваш отзыв поможет нам стать лучше.
              </p>
              <form className="flex flex-col gap-4">
                <label htmlFor="textArea">
                  Текст сообщения<span className="text-red-500">*</span>
                </label>

                <textarea
                  onChange={(e) => {
                    setData(e.target.value);
                  }}
                  placeholder="Ваш отзыв"
                  cols={"15"}
                  rows={"5"}
                  className={
                    data !== ""
                      ? "resize-none border-[1px] outline-none p-3 transition-all"
                      : "resize-none border-[1px] border-red-500 outline-none p-3 transition-all"
                  }
                  name="textArea"
                  id="textArea"
                  required
                ></textarea>
                <div className="flex flex-wrap md:gap-0 gap-4 justify-between font-semibold">
                  <button
                    onClick={validComment}
                    type="submit"
                    className="border-[1px] px-5 py-2 bg-blue-500 text-white"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </section>
          </div>
        </WriteComment>
      </ul>
      {(bg == "Афиша" || bg == "Сеансы") && <WeekDates />}
    </>
  );
}
