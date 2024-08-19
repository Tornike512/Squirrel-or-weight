import { UseApi } from "src/hooks/UseIP";
import { UseSendApi } from "src/hooks/UseSendIp";

export function WouldYouRather() {
  const api = UseApi();
  UseSendApi();

  return (
    <div className="pt-[5%] px-[10%]">
      <h1 className="text-[48px] text-[#ffffff]  flex justify-center items-center mb-[20px]">
        Would you rather
      </h1>
      <div className="w-full text-[#ffffff] flex justify-center items-center relative">
        <div className="bg-[#E30B0B] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-bl-[10px] rounded-tl-[10px] cursor-pointer hover:bg-[#FF0707]">
          Control two squirrels
        </div>
        <div className="bg-[#0CD949] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-br-[10px] rounded-tr-[10px] cursor-pointer hover:bg-[#00FF4C]">
          Know the mass of everything you look at
        </div>
        <h2 className="absolute bg-[#533968] px-[15px] py-[6px] text-[32px] rounded-[100%]">
          OR
        </h2>
      </div>
    </div>
  );
}

export default WouldYouRather;
