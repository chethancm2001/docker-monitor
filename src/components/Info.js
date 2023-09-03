import { useEffect , useState } from "react";
import axios from "axios";
import config from "./contant"
import Error from "./Error";

function Info(){
  let [data,setData] = useState({})

  async function fetchdata(){
    try{
    let result = await axios.get(config.baseurl+"version")
    console.log(result.data)
    setData(result.data)
    }

    catch(error){
      console.log(error)
    }
    
  }
  
  useEffect(()=>{fetchdata()},[])

  function printdata(key){
    
    if (typeof data[key] == "string"){
      return (
        <tr>
        <td><p>{key}</p></td>
         <td><p>{data[key]}</p></td>
        </tr>
      )
    }

  }

    return(
          <>
          <h1>Info</h1>
          <table>
          {Object.keys(data).map((key) => (
            <>{printdata(key)}</>
        ))}
        </table>
          </>
    )

}
 export default Info;