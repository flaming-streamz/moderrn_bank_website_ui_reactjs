interface Props {}

import { stats } from "../constants";
import styles from "../style";

const Stats: React.FunctionComponent<Props> = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row space-x-2 m-3`}>
            <h4 className="font-poppins font-semibold text-white text-[30px] leading-[43px] xs:text-[40px] xs:leading-[53px]">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal text-gradient uppercase text-[15px] leading-[21px] xs:text-[20px] xs:leading-[26px]">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
