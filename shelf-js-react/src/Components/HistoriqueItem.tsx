interface HistoriqueItem {
    url : string;
    type: string;
    nom : string;
}

export default function HistoriqueItem({item, id, setSelectedItem, setType} : {item: HistoriqueItem, id:number, setSelectedItem:React.Dispatch<React.SetStateAction<any>>, setType: React.Dispatch<React.SetStateAction<any>>}) {
    
    const getItem = {id: id, nom: item.nom, type: item.type}

    const handleClick = () => {
        setType(item.type)
        setSelectedItem(getItem)
    }
    
    return (
        <div className="bg-[#212121] px-4 py-2 m-2 rounded-[10px] flex items-center justify-between gap-4 relative">
            <p className="text-nowrap overflow-hidden">{item.nom} - {item.type}</p>

            <button className="group" onClick={handleClick}>
                <svg className="group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
        </div>
    )
}