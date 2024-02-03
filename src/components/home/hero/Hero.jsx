import {
  bottomRectangle,
  frameOne,
  frameThree,
  frameTwo,
  logo,
  presto,
} from "../../../assets/getAssets";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="max-w-[1200px] relative z-[100] mx-auto ">
      <div className="flex flex-col lg:flex-row gap-y-6 justify-between lg:items-center mb-[56px]">
        <div className="flex-1 max-w-full md:max-w-[567px] px-4 lg:px-0">
          <h2 className="text-3xl head-title  lg:text-[48px] mb-4 leading-[40px] lg:leading-[72px]">
            Save time by building fast with Boldo Template
          </h2>
          <p className="desc mb-5 lg:mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <button className="buttonOne">Buy template</button>
            <button className="buttonTwo">Explore</button>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row grid-cols-2  gap-6  px-4 lg:px-0">
            <div className="col-span-2">
              <img
                src={frameOne}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-full rounded-3xl">
              <img src={frameThree} className="w-full h-full " alt="" />
            </div>
            <div className="flex justify-end rounded-3xl">
              <img src={frameTwo} className="" alt="" />
            </div>
            
          </div>
        </div>
      </div>
      <div className="hidden md:block relative w-full h-[93px] overflow-hidden ">
        <div className="absolute w-full h-full top-0 left-0">
          <img
            src={bottomRectangle}
            alt=""
            className="w-full "
          />
        </div>
        <div className="flex items-center justify-between ">
          <img
            src={logo}
            alt=""
            className="w-[149px] h-[42px]"
          />
          <img
            src={presto}
            alt=""
            className="w-[149px] h-[42px]"
          />
          <img
            src={logo}
            alt=""
            className="w-[149px] h-[42px]"
          />
          <img
            src={presto}
            alt=""
            className="w-[149px] h-[42px]"
          />
          <img
            src={logo}
            alt=""
            className="w-[149px] h-[42px]"
          />
          <img
            src={presto}
            alt=""
            className="w-[149px] h-[42px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
