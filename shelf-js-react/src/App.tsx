import { useState } from 'react'
import Historique from './Components/Historique';
import Main from './Components/Main';
import Post from './components/Post';

function App() {

    const [response, setResponse] = useState<string>("")
    const [openHistorique, setOpenHistorique] = useState<boolean>(true)
    const [posts, setPosts] = useState<Array<Object>>([])

    const livre = () => {
        fetch('http://localhost:3000/reddit')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
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
