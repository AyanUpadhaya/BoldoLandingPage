import {
  blogone,
  blogthree,
  blogtwo,
  card_one,
  card_two,
} from "../../../assets/getAssets";

const OurBlog = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative z-[100] mb-[60px] lg:mb-[120px] py-4 lg:py-0">
      <div className="text-center px-4 mb-8 lg:mb-20 max-w-[742px] mx-auto">
        <h4 className="font-openSans font-normal text-xl text-gray leading-8 text-center mb-3">
          Our Blog
        </h4>
        <h2 className="text-pureblack font-manrope text-3xl lg:text-5xl text-center lg:leading-[72px]">
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div className="px-4 lg:px-0 flex flex-col md:flex-row gap-[50px] items-stretch mb-10 lg:mb-[84px]">
        <div className="flex flex-col items-start w-full ">
          <div className="mb-6 rounded-3xl w-full">
            <img
              src={blogone}
              className="w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-5  h-full">
            <div className="flex flex-col gap-3">
              <div>
                <button className="border-none outline-none flex items-center gap-4 ">
                  <span className="text-xl font-bold text-darkBlue ">
                    Category
                  </span>
                </button>
              </div>
              <div>
                <h3 className="font-openSans text-2xl text-pureblack mb-3">
                  Pitch termsheet backing validation focus release.
                </h3>
              </div>
            </div>
            <div className="mt-auto flex gap-3 items-center ">
              <img
                src={card_one}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col gap-[6px] font-openSans">
                <h4 className="text-black font-normal font-openSans text-base">
                  Chandler Bing
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full ">
          <div className="mb-6 rounded-3xl w-full">
            <img
              src={blogtwo}
              className="w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-5  h-full">
            <div className="flex flex-col gap-3">
              <div>
                <button className="border-none outline-none flex items-center gap-4 ">
                  <span className="text-xl font-bold text-darkBlue ">
                    Category
                  </span>
                </button>
              </div>
              <div>
                <h3 className="font-openSans text-2xl text-pureblack mb-3">
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </h3>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={card_two}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col gap-[6px] font-openSans">
                <h4 className="text-black font-normal font-openSans text-base">
                  Rachel Green
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full ">
          <div className="mb-6 rounded-3xl w-full">
            <img
              src={blogthree}
              className="w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-5  h-full">
            <div className="flex flex-col gap-3">
              <div>
                <button className="border-none outline-none flex items-center gap-4 ">
                  <span className="text-xl font-bold text-darkBlue ">
                    Category
                  </span>
                </button>
              </div>
              <div>
                <h3 className="font-openSans text-2xl text-pureblack mb-3">
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </h3>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={card_one}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col gap-[6px] font-openSans">
                <h4 className="text-black font-normal font-openSans text-base">
                  Monica Geller
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="py-4 px-14 text-darkBlue bg-white rouned rounded-[56px] border-2 border-darkBlue text-xl font-bold ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default OurBlog;
