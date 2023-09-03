import { useState, useEffect } from "react";
import axios from "axios";
import config from "../components/contant";
function useReach() {
  const [error, seterror] = useState(null);

  async function checkForDocker() {
    try {
      let result = await axios.get(config.baseurl + "version");

      seterror(false);
    } catch (error) {
      seterror(true);
    }
  }

  useEffect(() => {
    checkForDocker();
  }, []);

  return error;
}

export default useReach;
