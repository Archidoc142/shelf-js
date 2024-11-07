import { useState } from 'react'
import Historique from './Components/Historique';
import Main from './Components/Main';

function App() {

    const [response, setResponse] = useState<string>("")
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)

    const livre = () => {
        fetch('http://localhost:3000/api/data')
            .then((response) => response.text())
            .then((body) => {
                setResponse(body)
            });
    }

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
