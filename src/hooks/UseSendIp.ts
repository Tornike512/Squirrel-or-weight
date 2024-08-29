import axios from "axios";

import { useEffect } from "react";
import { GlobalContext } from "src/GlobalContext";
import { useContext } from "react";

export function UseSendApi() {
  const { api, setApi } = useContext(GlobalContext);

  async function postApi() {
    try {
      const response = await axios.post(
        "https://squirrel-weight-backend.vercel.app/",
        api
      );
      setApi(JSON.stringify(response.data));
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    postApi();
  }, []);

  return { api };
}
