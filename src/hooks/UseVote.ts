import axios from "axios";

export const submitVote = async (color: "green" | "red" | "") => {
  try {
    const response = await axios.post("http://localhost:3000/vote", { color });
    if (response.status !== 201) {
      throw new Error("Failed to submit vote");
    }
  } catch (error) {
    console.error("Error submitting vote:", error);
    throw error;
  }
};
