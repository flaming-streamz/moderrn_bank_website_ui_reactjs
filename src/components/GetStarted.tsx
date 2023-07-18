import { arrowUp } from "../assets";
import styles from "../style";

interface Props {}

const GetStarted: React.FunctionComponent<Props> = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col h-[100%] w-[100%] bg-primary rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[22px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[22px] h-[22px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
