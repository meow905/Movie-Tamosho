import { useEffect, useRef } from "react"

export default function ChoosePlace({children,open}) {
    const dialog = useRef()
    useEffect(()=>{
        if (open) {
            dialog.current.showModal()
        } else dialog.current.close()
    },[open])
    return (
        <dialog ref={dialog} className="rounded-lg px-10 py-5">
            {children}
        </dialog>
    )
}