import {useState} from 'react'
import data from "../Data"
import Loader from "./Loader"
import CV from "../assets/CV Gerardo Arrieta.pdf"

const Linkbio = () => {
    const [loading, setLoading] = useState(true)
    console.log(data);setTimeout(() => {
           setLoading(false) 
        }, 1500)
  return (

    <div className="link-container" >
     {loading ? <Loader />: <ul>
        { data.map(item=>(
         
            <li className="list-container" key={item.id}><a href={item.link}  target="_blank" rel="noreferrer">{item.name} </a></li>)
        )}
    </ul> }
  
   
  
        
    </div>
  )
}

export default Linkbio