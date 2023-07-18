import { GetStarted } from ".";
import { discount, robot } from "../assets";
import styles from "../style";

interface Props {}

const Hero: React.FunctionComponent<Props> = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} md:flex-row`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0  `}>
        <div className="flex flex-row items-center rounded-[10px] mb-2 py-[6px] px-4 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* main big text */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins text-white font-semibold text-[52px] leading-[75px]  ss:text-[72px] ss:leading-[100px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="hidden mr-0  ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins text-white font-semibold w-full text-[52px] leading-[75px]  ss:text-[68px] ss:leading-[100px]">
          Payement Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fee.
        </p>
      </div>

      {/* Right side of the hero section ------------------------- */}
      <div className={`flex-1 flex ${styles.flexCenter} my-10 relative md:my-0`}>
        <img src={robot} alt="robot-arm" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 blue__gradient " />
      </div>

      {/* get started on mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
