import React, { useEffect, useState } from 'react';

export default function Search({ setPosts } : {setPosts:React.Dispatch<React.SetStateAction<any>>}) {

    const [type, setType] = useState<string>('');
    const [text, setText] = useState<string>('');

    const livre = () => {
        fetch('http://localhost:3000/' + type + "?search=" + text)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
                console.log(json)
            });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e);
        livre();
    }

    return(
        <form onSubmit={handleSubmit} className="w-full">
            <div className="bg-[#2e2e2e] rounded-full py-[12px] px-8 border-black border-2 flex gap-4 mb-4">
                <input 
                    className="w-full bg-[#2e2e2e] outline-none"
                    type="text"
                    placeholder="Que recherchez-vous?"
                    onChange={(e) => setText(e.target.value)}
                />

                <button className="bg-[#666666] rounded-full p-2 group" type="submit">
                    <svg className="group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 9l-6 6 6 6"/><path d="M20 4v7a4 4 0 0 1-4 4H5"/></svg>
                </button>
            </div>

            <div className="flex gap-4">
                <input type="radio" name="search" onChange={() => setType('livres')} required/>
                <label htmlFor="livres">Livres</label>

                <input type="radio" name="search" onChange={() => setType('films')} required/>
                <label htmlFor="films">Films</label>

                <input type="radio" name="search" onChange={() => setType('jeux')} required/>
                <label htmlFor="jeux">Jeux Vidéo</label>

                <input type="radio" name="search" onChange={() => setType('musiques')} required/>
                <label htmlFor="musiques">Musique</label>
            </div>
        </form>
    )
}