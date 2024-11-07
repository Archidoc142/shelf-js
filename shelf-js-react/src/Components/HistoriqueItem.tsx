export default function HistoriqueItem({nom} : {nom: string}) {
    return (
        <div className="bg-[#212121] px-4 py-2 m-2 rounded-[10px] flex items-center justify-between gap-4 relative">
            <p className="text-nowrap overflow-hidden">{nom}</p>

            <button className="group">
                <svg className="group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
        </div>
    )
}