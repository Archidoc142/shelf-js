import { useState } from "react";
import ButtonHistorique from "./ButtonHistorique";
import Posts from "./Posts";
import Search from "./Search";

export default function Main({setOpen, open}: {setOpen: React.Dispatch<React.SetStateAction<any>>, open: boolean}) {

    const [posts, setPosts] = useState<Array<Object>>([])

    return(
        <div className={'py-16 flex justify-center items-center h-full flex-col ' + (open ? "ml-80 mr-20" : "mx-20")}>
            <ButtonHistorique 
                setOpen={setOpen}
                open={open}
            />
            <Search setPosts={setPosts} />
            <Posts posts={posts} />
        </div>
    )
}