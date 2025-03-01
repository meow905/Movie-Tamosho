import { useEffect, useRef } from "react";



export default function Numbers({open,children}) {
  const dialog = useRef()
  useEffect(()=>{
    if (open) {
      dialog.current.showModal()
    } else dialog.current.close()
  },[open])
    return (
      <dialog className="rounded-lg outline-none absolute bottom-0" ref={dialog}>
        <ul>
          <li className="border-b-[1px] border-solid border- p-6">
            +992934540000
          </li>
          <li className="p-6">+992989540000</li>
          {children}
        </ul>
      </dialog>
    );
}