import axios from "axios";
import { useEffect, useState } from "react";

import { TColorVote, TIpAddress } from "src/types/Enums";

export function UseApi() {
  const [votes, setVotes] = useState<TColorVote[]>([]);
  const [ipAddress, setIpAddress] = useState<TIpAddress[]>([]);

  async function getApi() {
    try {
      const response = await axios.get("http://localhost:3000/");
      setVotes(response.data);
      setIpAddress(response.data);
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return { votes, ipAddress };
}
