import {useState} from 'react'
import data from "../Data"
import Loader from "./Loader"


const Linkbio = () => {
    const [loading, setLoading] = useState(true)
    console.log(data);setTimeout(() => {
           setLoading(false) 
        }, 1500)
  return (

    <div className="link-container" >
     {loading ? <Loader />: <ul>
        { data.map(item=>(
         
            <li style={{maxWidth:"50px"}} className="list-container" key={item.id}><a href={item.link}  target="_blank" rel="noreferrer">{item.name} </a></li>)
        )}
    </ul> }
  
   
  
        
    </div>
  )
}

export default Linkbio

// "scripts": {
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },