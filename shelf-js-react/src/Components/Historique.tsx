import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HistoriqueItem from "./HistoriqueItem";
import { useRef, useState } from 'react';
import HistoriqueActions from './HistoriqueActions';

export default function Historique({open, historique, setType, setPosts} : {open: boolean, historique: Array<Object>, setType: React.Dispatch<React.SetStateAction<any>>, setPosts:  React.Dispatch<React.SetStateAction<any>>}) {

    const container = useRef(null)
    const [selectedItem, setSelectedItem] = useState<{id: number; nom: string; type: string}>({id: 0, nom: "", type: ""})

    useGSAP(() => {
        if (open) {
            gsap.to(container.current, { 
                width: "auto",
                duration: 1,
                ease: "back.out"
            });

        } else {
            gsap.to(container.current, {
                width:0,
            })
        }
    }, [open])

    return (
        <div ref={container} className={"bg-[#171717] fixed left-0 h-screen w-[15%] overflow-hidden " + (open ? "min-w-60 max-w-60" : "min-w-0" )}>

            <h2 className="text-center font-bold my-4 text-xl">Historique</h2>

            {
                historique.length > 0 ? 
                historique.map((h:any, i:number) => (
                    <HistoriqueItem key={i} item={h} id={i + 1} setSelectedItem={setSelectedItem} setType={setType} />
                ))
                : null
            }

            <HistoriqueActions 
                selectedItem={selectedItem} 
                setPosts={setPosts} 
                setSelectedItem={setSelectedItem} 
            />
        </div>
    )
}