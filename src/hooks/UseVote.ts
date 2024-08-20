import axios from "axios";

export const submitVote = async (color: "green" | "red", ipAddress: any) => {
  try {
    const response = await axios.post("http://localhost:3000/vote", {
      color,
      ipAddress,
    });

    if (response.status !== 200) {
      throw new Error("Failed to submit vote");
    }
  } catch (error) {
    console.error("Error submitting vote:", error);
    throw error;
  }
};
