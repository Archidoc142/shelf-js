import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HistoriqueItem from "./HistoriqueItem";
import { useRef } from 'react';

export default function Historique({open, historique} : {open: boolean, historique: Array<Object>}) {

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

            {
                historique.length > 0 ? 
                    historique.map((h:any, i:number) => (
                        <HistoriqueItem key={i} item={h} />
                    ))
                : null
            }
        </div>
    )
}