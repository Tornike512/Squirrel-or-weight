export function WouldYouRather() {
  return (
    <div className="py-[10%]">
      <h1 className="text-[48px] text-[#ffffff] font-bold flex justify-center items-center mb-[20px]">
        Would you rather
      </h1>
      <div className="w-full text-[#ffffff] flex justify-center items-center relative">
        <div className="bg-[#ff1010] h-[300px] w-[400px] flex justify-center items-center font-bold text-[28px] p-[20px] text-[#ffffff] text-center rounded-bl-[10px] rounded-tl-[10px]">
          Control two squirrels
        </div>
        <div className="bg-[#11ff58] h-[300px] w-[400px] flex justify-center items-center font-bold text-[28px] p-[20px] text-[#ffffff] text-center rounded-br-[10px] rounded-tr-[10px]">
          Know the mass of everything you look at
        </div>
        <h2 className="absolute bg-[#533968] font-bold p-[20px] rounded-[100%]">
          OR
        </h2>
      </div>
    </div>
  );
}

export default WouldYouRather;
