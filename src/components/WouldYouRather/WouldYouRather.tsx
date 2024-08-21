import { useState, useEffect } from "react";
import { UseSendApi } from "src/hooks/UseSendIp";
import { UseApi } from "src/hooks/UseIP";
import { submitVote } from "src/hooks/UseVote";
import { UseGetVotes } from "src/hooks/UseGetVotes";
import { useTranslation } from "react-i18next";
import usaFlag from "src/assets/usa-flag.webp";
import georgianFlag from "src/assets/georgian-flag.jpg";
import i18n from "src/Features/i18n";

export function WouldYouRather() {
  UseSendApi();

  const { t } = useTranslation();

  const [showVotes, setShowVotes] = useState<boolean>(false);
  const [showGeorgia, setShowGeorgia] = useState<boolean>(true);
  const [showEngland, setShowEngland] = useState<boolean>(false);
  const [addOne, setAddOne] = useState<number>(0);

  const { collectedVotes } = UseGetVotes();

  const { ipAddress } = UseApi();

  const greens = collectedVotes.filter((green) => {
    return green.color === "green";
  });

  const reds = collectedVotes.filter((red) => {
    return red.color === "red";
  });

  const sum = greens.length + reds.length;
  const greenPercent = (greens.length * 100) / sum;
  const redPercent = (reds.length * 100) / sum;

  const lastIp =
    ipAddress.length > 0
      ? ipAddress[ipAddress.length - 1]
      : { ipAddress: "N/A" };

  const mappedAddresses = ipAddress.map((address) => address.ipAddress);

  useEffect(() => {
    if (!mappedAddresses.includes(lastIp.toString())) {
      setShowVotes(true);
    }
  }, [lastIp]);

  useEffect(() => {
    setShowGeorgia(true);
    i18n.changeLanguage("ge");
  }, []);

  const change = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="pt-[5%] px-[10%]">
      <div className="relative">
        <h1 className="text-[32px] text-[#ffffff]  flex justify-center items-center mb-[20px] lg:pt-[50px] md:text-center md:text-2xl">
          {t("would you rather")}
        </h1>
        <div className="absolute top-0 right-0">
          <figure>
            {showGeorgia && (
              <img
                onClick={() => {
                  change("ge");
                  if (showGeorgia && !showEngland) {
                    setShowEngland(true);
                  } else if (showGeorgia && showEngland) {
                    setShowEngland(false);
                  }
                }}
                className="w-[75%] h-[30px] cursor-pointer border border-solid border-[#000000] shadow-[3px_4px_7px_#8d7878] mb-[7px] sm:w-[70%] sm:h-[24px]"
                src={georgianFlag}
                alt="Georgian Flag"
              />
            )}
            {showEngland && (
              <img
                onClick={() => {
                  change("en");
                  if (showEngland && !showGeorgia) {
                    setShowGeorgia(true);
                  } else if (showGeorgia && showEngland) {
                    setShowGeorgia(false);
                  }
                }}
                className="w-[75%] h-[30px] cursor-pointer border border-solid border-[#000000] shadow-[3px_4px_7px_#8d7878] sm:w-[70%] sm:h-[24px]"
                src={usaFlag}
                alt="Usa Flag"
              />
            )}
          </figure>
        </div>
        <ul className="flex absolute text-[24px] text-[#ffffff] left-0 top-0 sm:text-[18px]">
          {t("votes")}:{" "}
          <li className="font-bold"> {collectedVotes.length + addOne}</li>
        </ul>
      </div>
      <div className="w-full text-[#ffffff] flex justify-center items-center relative lg:flex-col">
        <ul
          onClick={() => {
            setAddOne(1);
            setShowVotes(true);
            if (mappedAddresses.includes(lastIp.toString())) {
              submitVote("red", ipAddress);
            }
          }}
          className="bg-[#E30B0B] border-[10px] border-solid border-[#533968] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-bl-[10px] rounded-tl-[10px] cursor-pointer hover:bg-[#FF0707] lg:w-full md:h-[250px] lg:rounded-tl-[10px] lg:rounded-tr-[10px] lg:rounded-bl-[0px]"
        >
          {!showVotes ? (
            t("control two squirrels")
          ) : (
            <li>
              {collectedVotes.length === 0 ? "0" : redPercent.toFixed(1)}%
            </li>
          )}
        </ul>
        <div
          onClick={() => {
            setAddOne(1);
            setShowVotes(true);
            if (mappedAddresses.includes(lastIp.toString())) {
              submitVote("green", ipAddress);
            }
          }}
          className="bg-[#0CD949] border-[10px] border-solid border-[#533968] h-[300px] w-[400px] flex justify-center items-center text-[28px] p-[40px] text-[#ffffff] text-center rounded-br-[10px] rounded-tr-[10px] cursor-pointer hover:bg-[#00FF4C] lg:w-full md:h-[250px] lg:rounded-bl-[10px] lg:rounded-tr-[0px]"
        >
          {!showVotes ? (
            t("know the mass of everything you look at")
          ) : (
            <p className="text-[30px]">
              {collectedVotes.length === 0 ? "0" : greenPercent.toFixed(1)}%
            </p>
          )}
        </div>
        <div className="bg-[#533968] py-[6px] px-[15px] absolute rounded-[100%]">
          <h2 className="text-[32px]">OR</h2>
        </div>
      </div>
    </div>
  );
}

export default WouldYouRather;
