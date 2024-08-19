import axios from "axios";

import { useEffect, useState } from "react";

export function UseApi() {
  const [api, setApi] = useState<string>("");

  async function getApi() {
    try {
      const response = await axios.get(
        "https://squirrel-weight-backend-j.onrender.com/"
      );
      setApi(response.data);
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  console.log(api);

  return { api };
}
