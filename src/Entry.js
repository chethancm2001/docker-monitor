// component handle the routing of the application
import Heading from "./components/Heading"
import Setip from "./components/Setip"
import Info from "./components/Info"
import Images from "./components/Images"
import Container from "./components/Container"

import { useState ,useEffect } from "react"

import config from "./components/contant"
import Error from "./components/Error"
import useReach from "./utils/useReach"

function Entry() {
    let [reach , setrach] = useState(null)

   reach = useReach()
   console.log(reach)
   if(reach == true){
    return(
        <>
        <Error />
        </>
    )
    }



    return (
         <>
        <Heading />
        <Info />
        <Images />
        <Container /> 
        </>
        )
        
       
    
}

export default Entry