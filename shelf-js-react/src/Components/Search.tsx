export default function Search() {
    return(
        <form action="" className="w-full">
            <div className="bg-[#2e2e2e] rounded-full py-[12px] px-8 border-black border-2 flex gap-4 mb-4">
                <input 
                    className="w-full bg-[#2e2e2e] outline-none"
                    type="text"
                    placeholder="Que recherchez-vous?"
                />

                <button className="bg-[#666666] rounded-full p-2 group" type="submit">
                    <svg className="group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 9l-6 6 6 6"/><path d="M20 4v7a4 4 0 0 1-4 4H5"/></svg>
                </button>
            </div>

            <div className="flex gap-4">
                <input type="radio" name="search" value="livre" required/>
                <label htmlFor="livre">Livres</label>

                <input type="radio" name="search" value="film" required/>
                <label htmlFor="film">Films</label>

                <input type="radio" name="search" value="jeu" required/>
                <label htmlFor="jeu">Jeux Vidéo</label>

                <input type="radio" name="search" value="musique" required/>
                <label htmlFor="musique">Musique</label>
            </div>
        </form>
    )
}