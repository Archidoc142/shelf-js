import ButtonHistorique from "./ButtonHistorique";
import Search from "./Search";

export default function Main({setOpen, open}: {setOpen: React.Dispatch<React.SetStateAction<any>>, open: boolean}) {
    return(
        <div className={'py-16 flex justify-center items-center h-full flex-col ' + (open ? "ml-80 mr-20" : "mx-20")}>
            <Search />
            <ButtonHistorique 
                setOpen={setOpen}
                open={open}
            />
        </div>
    )
}