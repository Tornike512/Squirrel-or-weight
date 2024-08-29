import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "src/GlobalContext";
import { TColorVote, TIpAddress } from "src/types/Enums";

export function UseApi() {
  const [votes, setVotes] = useState<TColorVote[]>([]);
  const [ipAddress, setIpAddress] = useState<TIpAddress[]>([]);

  const { setLoading } = useContext(GlobalContext);

  async function getApi() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://squirrel-weight-backend.vercel.app/"
      );
      setVotes(response.data);
      setIpAddress(response.data);
    } catch (error) {
      console.log("Error Loading Api");
      setLoading(false);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return { votes, ipAddress };
}
