import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HistoriqueItem from "./HistoriqueItem";
import { useRef } from 'react';

export default function Historique({open} : {open: boolean}) {

    const container = useRef(null)

    const opening = gsap.to(container.current, { width: 240 })
    const closing = gsap.to(container.current, { width: 0 })

    useGSAP(() => {
        if (open) {
            opening.play()
        } else {
            closing.play()
        }
    }, [open])

    return (
        <div ref={container} className={"bg-[#171717] fixed left-0 h-screen w-[15%] overflow-hidden " + (open ? "min-w-60 max-w-60" : "min-w-0" )}>

            <h2 className="text-center font-bold my-4 text-xl">Historique</h2>

            <HistoriqueItem nom="Rigeur" />
            <HistoriqueItem nom="Genshin" />
            <HistoriqueItem nom="Yo les amis c'est Squeezie" />
            <HistoriqueItem nom="Cyprien vs Norman" />
        </div>
    )
}