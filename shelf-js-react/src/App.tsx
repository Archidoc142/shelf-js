import { useState } from 'react'

function App() {

    const [response, setResponse] = useState("")

    const livre = () => {
        fetch('http://localhost:3000/api/data')
            .then((response) => response.text())
            .then((body) => {
                setResponse(body)
            });
    }

    return (
        <>
            <button className='text-white' onClick={livre}>loupe</button>
            {response}
        </>
    )
}

export default App
