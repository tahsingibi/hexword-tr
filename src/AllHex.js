import { useState } from 'react'

const copyIcon = <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><rect x="4" y="7" width="12" height="14"></rect><path d="M16 17h4V3H8v4"></path></svg>;

function Allhex({setBgChange}) {

    const [hexAll, setHexAll] = useState([])
    const dataUrl = "https://gist.githubusercontent.com/f/9c59c515fca028b549a6014aa43c14b0/raw/8253074695e0777b97b6be5e96b6c51f645337ae/all-hex-words.json"


    fetch(dataUrl)
    .then((res)=>res.json())
    .then(
        (resp) => {
            const data = resp
            const filter = data.filter((item)=>[3,6,8].includes(item[0].length))
            setHexAll(filter)
        }
    )
    .catch((e)=>console.log(e))
    

    const [filterHex, setFilterHex] = useState('')
    const filtered = hexAll.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(filterHex.toLocaleLowerCase()))
    })

    return (
    <>
     <div className="filterBox">
        <input placeholder='Kelime veya HEX kodu girin' value={filterHex}
        onChange={(e)=>setFilterHex(e.target.value)} />
    </div>
    <div className="colorContainer">
        {
        filtered.map(
            (item, i)=>
            <div key={i} className="colorCard" onClick={()=>{setBgChange(`${item[1]}`)}} aria-hidden="true"> 
                <div className="colorBox" style={{backgroundColor:`${item[1]}`}}></div>
                <div className="text"> 
                <p className="word" >{item[0]}</p>
                <p className="hex" >{item[1]}</p>
                </div>
                <button className="copyButton" onClick={() => {
                    navigator.clipboard.writeText(item[0])
                    alert(`${item[1]} renk kodu kopyalandı!`)
                    }}>{copyIcon}</button>
            </div>
            )}
        </div>
        </>    
  )}
export default Allhex