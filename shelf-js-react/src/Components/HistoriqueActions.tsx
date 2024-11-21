export default function HistoriqueActions({ selectedItem, setPosts }: { selectedItem: { id: number; nom: string; type: string}, setPosts: React.Dispatch<React.SetStateAction<any>> }) {

    const API = () => {
        fetch('http://localhost:3000/' + selectedItem.type + "?search=" + selectedItem.nom)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
            });
    }

    return (
        <>
            {
                selectedItem.id !== 0 ?
                    <div className="bg-gray-600 py-2 mx-4 text-center flex flex-col gap-2 rounded-lg">
                        <p className="text-yellow-600">{selectedItem.nom} - {selectedItem.type}</p>
                        <button className="hover:bg-slate-400 text-green-600" onClick={API}>Consulter</button>
                        <button className="hover:bg-slate-400 text-red-600">Supprimer</button>
                    </div>
                    : null
            }
        </>
    )
}