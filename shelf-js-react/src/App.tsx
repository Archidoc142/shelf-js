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
            <p className='text-red-600'>e4rilfji;ojerpigjpi</p>
            <button className='text-white' onClick={livre}>loupe</button>
            {response}
        </>
    )
}

export default App
