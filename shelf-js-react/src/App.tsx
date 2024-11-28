import { useEffect, useState } from 'react'
import Historique from './Components/Historique'
import Main from './Components/Main'

function App() {

    const [historique, setHistorique] = useState<Array<{nom: string; type: string}>>([])
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)
    const [posts, setPosts] = useState<Array<Object>>([])
    const [type, setType] = useState<string>('');

    useEffect(() => {
        console.log("EFFECT")
        fetch('http://localhost:3000/historique')
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                const newItem = { nom: json[i].text, type: json[i].type }
                setHistorique((p:Array<any>) => [...p, newItem])
            }
        });
    }, [])

    return (
        <div>
            <Historique 
                open={openHistorique}
                historique={historique}
                setType={setType}
                setPosts={setPosts}
            />

            <Main 
                setOpen={setOpenHistorique}
                open={openHistorique}
                setHistorique={setHistorique}
                historique={historique}
                posts={posts}
                setPosts={setPosts}
                type={type}
                setType={setType}
            />
        </div>
    )
}

export default App
