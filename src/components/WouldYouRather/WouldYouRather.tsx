import { useState } from "react";
import { UseSendApi } from "src/hooks/UseSendIp";
import { UseApi } from "src/hooks/UseIP";
import { submitVote } from "src/hooks/UseVote";
import { UseGetVotes } from "src/hooks/UseGetVotes";

export function WouldYouRather() {
  UseSendApi();

  const { api } = UseApi();
  const { votes } = UseGetVotes();
  const [vote, setVote] = useState<"green" | "red" | "">("");

  submitVote(vote);

  const voted = Object.entries(api).length;

  return (
    <div className="pt-[5%] px-[10%]">
      <div className="relative">
        <h1 className="text-[48px] text-[#ffffff]  flex justify-center items-center mb-[20px]">
          Would you rather
        </h1>
        <p className="flex absolute text-[32px] text-[#ffffff] left-0 top-0 ">
          Vote: <p className="font-bold"> {voted}</p>
        </p>
      </div>
      <div className="w-full text-[#ffffff] flex justify-center items-center relative">
        <div
          onClick={() => setVote("red")}
          className="bg-[#E30B0B] border-[10px] border-solid border-[#533968] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-bl-[10px] rounded-tl-[10px] cursor-pointer hover:bg-[#FF0707]"
        >
          Control two squirrels
        </div>
        <div
          onClick={() => setVote("green")}
          className="bg-[#0CD949] border-[10px] border-solid border-[#533968] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-br-[10px] rounded-tr-[10px] cursor-pointer hover:bg-[#00FF4C]"
        >
          Know the mass of everything you look at
        </div>
        <div className="bg-[#533968] py-[6px] px-[15px] absolute rounded-[100%]">
          <h2 className="text-[32px]">OR</h2>
        </div>
      </div>
    </div>
  );
}

export default WouldYouRather;
