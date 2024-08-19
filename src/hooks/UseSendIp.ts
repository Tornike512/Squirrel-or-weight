import axios from "axios";

import { useEffect, useState } from "react";

export function UseSendApi() {
  const [api, setApi] = useState<string>("");

  async function postApi() {
    try {
      const response = await axios.post(
        "https://squirrel-weight-backend-j.onrender.com"
      );
      setApi(JSON.stringify(response.data));
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    postApi();
  }, []);

  console.log(api);

  return { api };
}
