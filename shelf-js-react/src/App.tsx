import { useState } from 'react'
import Post from './components/Post';

function App() {

    const [posts, setPosts] = useState([])

    const livre = () => {
        fetch('http://localhost:3000/reddit')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
            });
    }

    return (
        <>
            <p className='text-red-600'>e4rilfji;ojerpigjpi</p>
            <button className='text-white' onClick={livre}>loupe</button>
            {
                posts.map((post, i) => 
                    <Post post={post} key={i}/>
                )
            }

        </>
    )
}

export default App
