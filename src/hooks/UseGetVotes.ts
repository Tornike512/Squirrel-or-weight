import axios from "axios";

import { useEffect, useState } from "react";

export function UseGetVotes() {
  const [votes, setVotes] = useState<string[]>([]);

  async function getVotes() {
    try {
      const response = await axios.get("http://localhost:3000/vote");
      setVotes(response.data);
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    getVotes();
  }, []);

  return { votes };
}
