import { useState } from "react";

export default function NotFoundTicket () {
  const [button,setButton] = useState(false)
  const [buttonNum,setButtonNum] = useState(false)
  function handleChange(event) {
     if(!event.target.value == "") {
      setButton(true)
     } else setButton(false)
  }
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col py-14 px-10 rounded-lg bg-white w-max">
          <h1 className="md:text-4xl text-2xl mb-4 font-bold">
            Отправить билет ещё раз
          </h1>
          <form className="flex flex-col gap-5 text-xl" action="">
            <label htmlFor="email">
              Email или телефон<span className=" text-red-500 p-1">*</span>
            </label>
            <input
              className="text-xl py-2 px-3 border-2 border-solid border-gray-200 outline-blue-500 rounded-md"
              onChange={handleChange}
              required
              name="email"
              id="email"
              type="email"
              placeholder="Введите ваш Email"
            />
            <label htmlFor="number">
              Номер заказа<span className="text-red-500 p-1">*</span>
            </label>
            <input
              className="text-xl py-2 px-3 border-2 border-solid border-gray-200 outline-blue-500 rounded-md"
              onChange={(e) => {
                if (!e.target.value == "") {
                  setButtonNum(true);
                } else setButtonNum(false);
              }}
              required
              name="number"
              id="number"
              type="text"
              maxLength={11}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="123456789"
            />
            <label className="flex gap-4" htmlFor="">
              <input required className="ml-2" type="checkbox" />
              Продолжая, вы соглашаетесь с условиями покупки, пользовательским
              <br />
              соглашением, реквизитами и политикой конфиденциальности
            </label>
            <button
              className={
                button && buttonNum
                  ? "bg-purple-500 text-white py-3 rounded-md"
                  : "bg-purple-300 text-white py-3 rounded-md cursor-not-allowed"
              }
            >
              Отправить билет
            </button>
          </form>
        </div>
      </div>
    );
}