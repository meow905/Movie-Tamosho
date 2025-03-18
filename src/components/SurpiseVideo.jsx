import surprise1 from "../assets/8f.jpg"
import surprise2 from "../assets/9f.jpg"

export default function SurpriseVideo() {
    return (
      <div className="px-8 py-4">
        <h1 className="text-4xl font-semibold">Видеопоздравление</h1>
        <div className="pt-10 px-9 flex flex-col gap-5">
          <img src={surprise1} alt="1" />
          <img src={surprise2} alt="2" />
        </div>
        <section className="flex flex-col gap-5 py-5">
          <p className="text-red-500 border-b border-black pb-4">
            Поздравьте близкого человека с Днем рождения, сделайте предложение
            своей девушке или устройте приятный сюрприз другу прямо в кинозале в
            лучших традициях кинематографа.
          </p>
          <p className="border-b border-black pb-4">
            Поздравьте близкого человека с Днем рождения, сделайте предложение
            своей девушке или устройте приятный сюрприз другу прямо в кинозале в
            лучших традициях кинематографа. Кинотеатр «Тамошо» предоставляет
            возможность показать свой поздравительный видеоролик прямо перед
            фильмом. Только представьте: поход в кино, на большом экране реклама
            и трейлеры новых фильмов, а после видеоролик с вашими
            поздравлениями, зажигается свет, вы преподносите огромный букет,
            подарок или даже кольцо. Этот сюрприз человек не сможет забыть уже
            никогда.
          </p>
          <p className="leading-8">
            Стоимость услуги — <span className="font-semibold">300 Сомони</span>
            <br /> Подать заявку необходимо не позднее{" "}
            <span className="font-semibold">7 дней </span> до желаемого сеанса
            по телефону <span className="font-semibold">(992)938-70-3707 </span>{" "}
            <br /> Хронометраж ролика не должен превышать двух минут, а главное
            требование к предоставляемому ролику — <br />{" "}
            <span className="font-semibold">хорошее разрешение.</span>
          </p>
        </section>
      </div>
    );
}