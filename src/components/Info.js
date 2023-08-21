import { useEffect , useState } from "react";
import axios from "axios";
import config from "./contant"

function Info(){
  let [data,setData] = useState({})
  async function fetchdata(){
    let result = await axios.get(config.baseurl+"version")
    console.log(result.data)
    setData(result.data)
    
  }
  
  useEffect(()=>{fetchdata()},[])

    return(
        <div className="info">
        <h1>Docker info</h1>
        <div className="info-div">
        <p>Version: {data.Version}</p>
        <p>API Version: {data.ApiVersion}</p>
        <p>Min API Version: {data.MinAPIVersion}</p>
        <p>Go Version: {data.GoVersion}</p>
        <p>Operating System: {data.Os}</p>
        <p>Architecture: {data.Arch}</p>
        <p>Kernel Version: {data.KernelVersion}</p>
        </div>
        </div>
    )

}
 export default Info;