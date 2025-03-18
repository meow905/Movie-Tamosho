import korea from "../assets/8.jpg"
import birthDay from "../assets/1600.webp"
export default function EventPage() {
    return (
      <div className="flex flex-col gap-5 px-8 pt-2 pb-10">
        <div className="leading-8">
          <h1 className="text-2xl font-semibold">Дни рождения</h1> <br />
          <p>
            Вы можете весело проводит дни рождения своих детей в нашем
            кинотеатре, <br />а наша прекрасная команда вам в этом помогут
          </p>
          <img className="max-h-[340px]" src={birthDay} alt="happyBirthday" />
        </div>
        <div className="leading-8">
          <h1 className="text-2xl font-semibold">Кинофестивали</h1> <br />
          <p>​Фестиваль Корейских Фильмов</p>
          <img src={korea} alt="8" />
        </div>
      </div>
    );
}