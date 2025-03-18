import facebook from "../assets/facebook (1).png"
import instagram from "../assets/social.png"
export default function ContactsPage() {
    return (
      <div className="px-8 py-2">
        <h1 className="text-3xl font-semibold pb-3 ">Кохи Навруз</h1>
        <ul className="flex flex-col gap-4">
          <li className="font-semibold">Контакты</li>
          <li>
            Касса: <br /> <span className="text-yellow-400">+992934540000</span>{" "}
          </li>
          <li>
            Касса: <br /> <span className="text-yellow-400">+992989540000</span>{" "}
          </li>
          <ul className="flex flex-col gap-4">
            <li className="font-semibold">Адрес</li>
            <li className="text-yellow-400">
              Душанбе <br /> Проспект Исмоили Сомони, 14/2
            </li>
            <li className="font-semibold">Режим работы</li>
            <li>
              Ежедневно с 09:00 до 01:00 <br />В выходные с 09:00 до 02:00
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-semibold">Социальные сети</li>
            <li className=" text-yellow-400 ">
              <a
                target="_blank"
                href="https://www.facebook.com/TamoshoKino?mibextid=ZbWKwL"
                className="flex items-center gap-2"
              >
                <img width={50} src={facebook} alt="facebook" />
                Facebook
              </a>
            </li>
            <li className=" text-yellow-400">
              <a
                target="_blank"
                href="https://www.instagram.com/tamoshokino/?igshid=MzRlODBiNWFlZA%3D%3D"
                className="flex items-center gap-2"
              >
                <img width={50} src={instagram} alt="instagram" />
                Instagram
              </a>
            </li>
          </ul>
        </ul>
      </div>
    );
}