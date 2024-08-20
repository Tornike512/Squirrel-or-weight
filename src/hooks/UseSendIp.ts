import axios from "axios";

import { useEffect, useState } from "react";

export function UseSendApi() {
  const [api, setApi] = useState<string>("");

  async function postApi() {
    try {
      const response = await axios.post("http://localhost:3000/", api);
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
