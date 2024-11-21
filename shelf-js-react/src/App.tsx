import { useState } from 'react'
import Historique from './Components/Historique'
import Main from './Components/Main'

function App() {

    const [historique, setHistorique] = useState<Array<{nom: string; type: string}>>([])
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)

    return (
        <div>
            <Historique 
                open={openHistorique}
                historique={historique}
            />

            <Main 
                setOpen={setOpenHistorique}
                open={openHistorique}
                setHistorique={setHistorique}
                historique={historique}
            />
        </div>
    )
}

export default App
