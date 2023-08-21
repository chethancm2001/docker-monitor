import axios from "axios";

function Setip() {

  //code to make api call using axios
  //code to handle the response
async function getrequest(){
    let res = axios.get("http://localhost:2375/version")
    console.log(res)
  }

  return (

    <div>
      {getrequest()}
      <h2>setup</h2>
    </div>
  )
}
export default Setip;