import ButtonHistorique from "./ButtonHistorique";
import Posts from "./Posts";
import Search from "./Search";

export default function Main({setOpen, open, setHistorique, historique, posts, setPosts, type, setType}: {setOpen: React.Dispatch<React.SetStateAction<any>>, open: boolean, setHistorique:React.Dispatch<React.SetStateAction<any>>, historique: Array<{nom: string; type: string}>, posts:Array<Object>, setPosts:React.Dispatch<React.SetStateAction<any>>, type:string, setType:React.Dispatch<React.SetStateAction<any>>}) {

    return(
        <div className={'py-16 flex justify-center items-center h-full flex-col ' + (open ? "ml-80 mr-20" : "mx-20")}>
            <ButtonHistorique 
                setOpen={setOpen}
                open={open}
            />
            
            <Search 
                setPosts={setPosts} 
                type={type} 
                setType={setType} 
                setHistorique={setHistorique}
                historique={historique}
            />

            <Posts 
                posts={posts} 
                type={type} 
            />
        </div>
    )
}