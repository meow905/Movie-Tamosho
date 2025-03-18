import { useEffect, useRef } from "react"

export default function WriteComment({children,open}) {
    const dialog = useRef()
    useEffect(()=>{
        if (open) {
            dialog.current.showModal()
        } else dialog.current.close()
    },[open])
    return (
        <dialog ref={dialog} className="rounded-lg md:top-24 -top-28 ">
            {children}
        </dialog>
    )
}