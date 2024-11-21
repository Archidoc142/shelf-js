import { useState } from 'react'
import Historique from './Components/Historique'
import Main from './Components/Main'

function App() {

    const [historique, setHistorique] = useState<Array<{nom: string; type: string}>>([])
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)
    const [posts, setPosts] = useState<Array<Object>>([])
    const [type, setType] = useState<string>('');

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
