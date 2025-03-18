import imgEye from "../assets/illuminati (1).png";
import { useEffect, useState } from "react";
import Numbers from "./miniComponents/chevronNumbers";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";

export default function Header({setComment,getFalse}) {
  const [menu, setMenu] = useState(false);
  const [chevron ,setChevron]= useState(false)
  const [commentHeader,setCommentHeader] = useState(null)

  // useEffect(()=>{
   
  //     setCommentHeader(getFalse)
  //     console.log(commentHeader);
      
    
  // },[commentHeader])

  useEffect(()=>{
   setComment(commentHeader)
   
  },[commentHeader])
  document.addEventListener("keydown",(event)=>{
    if (chevron && event.code == "Escape") {
        setChevron(false)
      }
  })

  useEffect(()=>{
    if (chevron) {
      document.body.style.overflowY = "hidden"
    } else document.body.style.overflowY = "auto";  
  },[chevron])

  

   return (
     <>
       <header className="bg-neutral-800 flex items-center justify-between py-4 px-9 text-nowrap overflow-auto">
         <div className="text-white  flex items-center gap-10">
           <div className="flex items-center uppercase gap-1">
             <img className="md:w-16 w-12" src={imgEye} alt="eye" />
             <div>
               <p className="md:text-xs text-xs">Сеть кинотеатров</p>
               <h2 className="md:text-3xl text-2xl font-bold">Тамошо</h2>
             </div>
           </div>
           <ul className="leading-4 lg:hidden md:block hidden">
             <li className="text-white">+992934540000</li>
             <li className="text-gray-400">Касса</li>
           </ul>
           <div className="items-center gap-8 lg:flex hidden">
             <ul className="text-gray-400 leading-4 text-wrap ml-5">
               <a
                 target="_blank"
                 href="https://www.google.com/maps/place/3D+%D0%9A%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D0%9D%D0%B0%D0%B2%D1%80%D1%83%D0%B7/@38.5830985,68.7682551,17z/data=!3m1!4b1!4m6!3m5!1s0x38b5d37036183e35:0x27bb409b9c811b87!8m2!3d38.5830985!4d68.7682551!16s%2Fg%2F11h4nh8x3k!5m2!1e4!1e1?hl=ru&entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
               >
                 <li className="text-white">Душанбе</li>
                 <li>Кохи Навруз,</li>
                 <li>Проспект Исмоили Сомони, 14/2</li>
               </a>
             </ul>
             <ul className="leading-4 relative">
               <li className="text-white flex items-center">
                 +992934540000
                 {chevron ? (
                   <i
                     onClick={() => setChevron(!chevron)}
                     class="bx bx-chevron-up text-2xl cursor-pointer"
                   ></i>
                 ) : (
                   <i
                     onClick={() => setChevron(!chevron)}
                     class="bx bx-chevron-down text-2xl cursor-pointer"
                   ></i>
                 )}
               </li>
               <li className="text-gray-400">Касса</li>
               <Numbers open={chevron}>
                 <li
                   onClick={() => setChevron(!chevron)}
                   className="p-4 cursor-pointer hover:bg-yellow-500 text-center bg-yellow-400"
                 >
                   Закрыть
                 </li>
               </Numbers>
             </ul>
           </div>
         </div>
         <div className="md:flex gap-2 hidden">
           <a
             target="_blank"
             href="https://www.instagram.com/tamoshokino/?igshid=MzRlODBiNWFlZA%3D%3D"
           >
             <i class="bx bxl-instagram text-4xl bg-gray-400 hover:bg-yellow-400 rounded-full px-2 py-1"></i>
           </a>
           <a
             target="_blank"
             href="https://www.facebook.com/TamoshoKino?mibextid=ZbWKwL"
           >
             <i class="bx bxl-facebook text-4xl bg-gray-400 hover:bg-yellow-400 rounded-full px-2 py-1"></i>
           </a>

           <Link
             target="_blank"
             to="/NotFoundTicket"
             className="py-3 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-full"
           >
             Мне не пришел билет
           </Link>
         </div>
         <div className="md:hidden flex items-center gap-5">
           <button className=" sm:block hidden px-3 my-2 py-1 bg-yellow-400 rounded-full  transition-all">
             Войти
           </button>
           {menu ? (
             <i
               className="bx bx-x-circle text-4xl text-yellow-400"
               onClick={() => setMenu(false)}
             ></i>
           ) : (
             <i
               onClick={() => setMenu(true)}
               className="bx bx-menu text-4xl text-yellow-400"
             ></i>
           )}
         </div>
       </header>
       <div className="bg-neutral-900 text-white overflow-hidden md:hidden block">
         <motion.div
           initial={{ height: 0, opacity: 0 }}
           animate={{ height: menu ? "auto" : 0, opacity: menu ? 1 : 0 }}
           exit={{ height: 0, opacity: 0 }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
           className="overflow-hidden"
         >
           <p className="p-5">
             <div className="flex flex-col gap-4 items-start">
               <h2 className="leading-6 text-lg">
                 Душанбе
                 <p className="text-gray-400 text-base leading-4">
                   Кохи Навруз, <br />
                   Проспект Исмоили Сомони, 14/2
                 </p>
               </h2>
               <h2 className="leading-6 text-lg">
                 +992934540000
                 <p className="text-gray-400 text-base leading-4">Касса</p>
               </h2>
               <h2 className="leading-6 text-lg">
                 +992989540000
                 <p className="text-gray-400 text-base leading-4">Касса</p>
               </h2>
               <div className="flex flex-col items-start">
                 <button className="px-4 my-2 py-2 bg-yellow-400 rounded-full  transition-all text-neutral-900 font-semibold">
                   Войти
                 </button>
                 <button
                   onClick={() => setCommentHeader(true)}
                   className="px-4 my-2 py-2 bg-yellow-400 rounded-full  transition-all text-neutral-900 font-semibold"
                 >
                   Написать отзыв
                 </button>
                
                 <Link
                   target="_blank"
                   to="/NotFoundTicket"
                   className="py-3 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-full text-neutral-900 font-semibold"
                 >
                   Мне не пришел билет
                 </Link>
               </div>
             </div>
           </p>
         </motion.div>
       </div>
     </>
   );
 }

