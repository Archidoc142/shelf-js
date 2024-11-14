import { useState } from 'react'
import Historique from './components/Historique';
import Main from './components/Main';

function App() {

    const [response, setResponse] = useState<string>("")
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)

    return (
        <div>
            <Historique 
                open={openHistorique}
            />

            <Main 
                setOpen={setOpenHistorique}
                open={openHistorique}
            />
        </div>
    )
}

export default App
