import axios from "axios";
import { useState ,useEffect } from "react";
import config from "./contant"

function Container(){

let [containerdata,setcontainerdata] = useState([])

    async function getcontainer(){
        let result = await axios.get(config.baseurl +"containers/json?all=true")
        console.log(result.data)
        setcontainerdata(result.data)
    }
    
    function dispalycontainer(container,index){
        try{
            let id = container.Id.slice(0,12)
            let image = container.Image.slice(0,12)
            return(
                <tr>
                    <td>
                        <p>{id}</p>
                    </td>
                    <td>
                        <p>{container.Image}</p>
                    </td>
                    <td>
                        <p>{container.State}</p>
                    </td>
                    <td>
                        <p>{container.Names[0]}</p>
                    </td>
                </tr>
            )

        }catch(error){

        }
    }
    useEffect(()=>{
        getcontainer()
    },[])
    return(
        <div className="container-class">
            <h1>Container</h1>
            <div className="container-div">
            <table>
            <thead>
                <tr>
                    <th>Container Id</th>
                    <th>Image</th>
                    <th>State</th>
                    <th>name</th>
                </tr>
            </thead>
           <tbody>
            {containerdata.map((container,index)=>{
              return(<>{dispalycontainer(container,index)} </>)
                 
              
            })}
            </tbody>
             </table>
            </div>
        </div>
    )
}
export default Container;