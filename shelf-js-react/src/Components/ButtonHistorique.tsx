export default function ButtonHistorique({setOpen, open}: {setOpen: React.Dispatch<React.SetStateAction<any>>, open: boolean}) {

    const toggleOppen = () => {
        setOpen(!open)
    }

    return(
        <button className="absolute top-3 left-5" onClick={toggleOppen}>
            { open ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>}
        </button>
    )
}