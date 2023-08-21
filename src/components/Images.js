import axios from "axios";
import { useEffect , useState } from "react";
import config from "./contant"
function Images(){
    async function getimages(){
        axios.get(config.baseurl + "images/json")
    }
    useEffect(()=>{getimages()},[])
    return(
        <div>
            <h1>Images</h1>
        </div>
    )

}
export default Images;