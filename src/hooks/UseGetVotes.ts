import axios from "axios";
import { useEffect, useState } from "react";

import { TColorVote } from "src/types/Enums";

export function UseGetVotes() {
  const [collectedVotes, setCollectedVotes] = useState<TColorVote[]>([]);

  async function getCollectedVotes() {
    try {
      const response = await axios.get(
        "https://squirrel-weight-backend.vercel.app/vote"
      );
      setCollectedVotes(response.data);
    } catch (error) {
      console.log("Error Loading Api");
    }
  }

  useEffect(() => {
    getCollectedVotes();
  }, []);

  return { collectedVotes };
}
