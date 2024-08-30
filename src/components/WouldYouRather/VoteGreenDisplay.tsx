import { Loading } from "../Loading";

interface VoteDisplayProps {
  votesQuantity: number;
  changeLastIp: { ipAddress: string };
  showVotes: boolean;
  t: (key: string) => string;
  collectedVotes: any[];
  greenPercent: number;
}

const VoteDisplay: React.FC<VoteDisplayProps> = ({
  votesQuantity,
  changeLastIp,
  showVotes,
  t,
  collectedVotes,
  greenPercent,
}) => {
  if (changeLastIp.ipAddress === "N/A" && votesQuantity !== 0) {
    return <Loading width="60px" height="60px" />;
  } else {
    if (!showVotes) {
      return t("know the mass of everything you look at");
    } else {
      return (
        <li className="list-none text-[50px]">
          {collectedVotes.length === 0 ? "0" : greenPercent.toFixed(1)}%
        </li>
      );
    }
  }
};

export default VoteDisplay;
