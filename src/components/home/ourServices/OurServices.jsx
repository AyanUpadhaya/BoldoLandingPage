import { coolfeature, coolfeatureTwo, evencooler } from "../../../assets/getAssets";

const OurServices = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative z-[100]  py-[84px] ">
      {/* top */}
      <div className="max-w-[842px] mx-auto px-4 mb-20">
        <h4 className="font-openSans font-normal text-xl text-gray leading-8 text-center mb-3">
          Our Services
        </h4>
        <h2 className="text-pureblack font-manrope text-5xl text-center leading-[72px]">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>

      {/* cards */}
      <div className=" flex flex-col md:flex-row justify-between items-stretch">
        <div className="flex flex-col gap-6 items-start w-full max-w-[300px]">
          {/* image */}
          <div className="mb-6 h-[354px] rounded-3xl">
            <img src={coolfeature} className="w-full object-cover rounded-3xl" alt="" />
          </div>

          {/* captions */}
          <div>
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
              Cool feature title
            </h3>
            <p className="text-gray font-openSans text-xl">
              Learning curve network effects return on investment
            </p>
          </div>

          {/* button */}
          <div className="mt-auto">
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Explore</span>
              {/* svg */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    d="M5 14H19"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7L19 14L12 21"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[300px]">
          {/* image */}
          <div className="mb-6 h-[354px] rounded-3xl">
            <img src={evencooler} className="w-full object-cover rounded-3xl" alt="" />
          </div>

          {/* captions */}
          <div>
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
              Even coller feature
            </h3>
            <p className="text-gray font-openSans text-xl">
              Learning curve network effects return on investment
            </p>
          </div>

          {/* button */}
          <div className="mt-auto">
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Explore</span>
              {/* svg */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    d="M5 14H19"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7L19 14L12 21"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[300px]">
          {/* image */}
          <div className="mb-6 h-[354px] rounded-3xl">
            <img src={coolfeatureTwo} className="w-full object-cover rounded-3xl" alt="" />
          </div>

          {/* captions */}
          <div>
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
              Cool feature title
            </h3>
            <p className="text-gray font-openSans text-xl">
              Learning curve network effects return on investment
            </p>
          </div>

          {/* button */}
          <div className="mt-auto">
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Explore</span>
              {/* svg */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    d="M5 14H19"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7L19 14L12 21"
                    stroke="#0A2640"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
