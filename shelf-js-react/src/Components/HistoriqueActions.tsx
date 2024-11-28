export default function HistoriqueActions({ selectedItem, setPosts, setSelectedItem }: { selectedItem: { id: number; nom: string; type: string}, setPosts: React.Dispatch<React.SetStateAction<any>>, setSelectedItem: React.Dispatch<React.SetStateAction<any>> }) {

    const consulter = () => {
        fetch('https://shelf-js.onrender.com/' + selectedItem.type + "?search=" + selectedItem.nom)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json.data)
            });
    }

    const deleteInBD = () => {
        /*const formData = new FormData();
        formData.append('type', selectedItem.type)
        formData.append('text', selectedItem.nom)*/

        const formData = {
            "type": selectedItem.type,
            "text": selectedItem.nom
        }

        fetch('https://shelf-js.onrender.com/delete' , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(response => response.json())

        const toDelete = document.getElementById(selectedItem.id.toString())
        toDelete?.remove()

        setSelectedItem((p:Object) => ({...p, id: 0}))
    }

    return (
        <>
            {
                selectedItem.id !== 0 ?
                    <div id="selection" className="bg-gray-600 py-2 mx-4 text-center flex flex-col gap-2 rounded-lg">
                        <p className="text-yellow-600">{selectedItem.nom} - {selectedItem.type}</p>
                        <button className="hover:bg-slate-400 text-green-600" onClick={consulter}>Consulter</button>
                        <button className="hover:bg-slate-400 text-red-600"  onClick={deleteInBD}>Supprimer</button>
                    </div>
                    : null
            }
        </>
    )
}