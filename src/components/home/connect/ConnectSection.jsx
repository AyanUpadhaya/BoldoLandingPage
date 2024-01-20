import { calling, chart, chartTwo, women } from "../../../assets/getAssets";

const ConnectSection = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto  ">
      {/* first */}
      <div className="flex lg:items-end flex-col lg:flex-row justify-between gap-y-10 lg:mt-[180px] ">
        {/* left */}
        <div className="relative w-full max-w-[494px] ">
          <img src={calling} alt="" className="relative object-cover z-40 " />
          <img
            src={chart}
            alt=""
            className=" absolute  -bottom-5 lg:-bottom-36 lg:right-10 z-50 shadow-md"
          />
        </div>

        {/* right */}
        <div className="flex flex-col items-start gap-y-10 w-full lg:max-w-[493px] px-4 lg:px-0">
          <h2 className="text-pureblack text-[36px] font-manrope">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>

          <div className="flex flex-col items-start gap-y-6">
            <div className="flex gap-x-[27px]">
              <div className="w-[36px] h-[36px] rounded-full bg-primaryBg flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-openSans text-pureblack">
                We connect our customers with the best.
              </h4>
            </div>
            <div className="flex gap-x-[27px]">
              <div className="w-[36px] h-[36px] rounded-full bg-primaryBg flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-openSans text-pureblack">
                We connect our customers with the best.
              </h4>
            </div>
            <div className="flex gap-x-[27px]">
              <div className="w-[36px] h-[36px] rounded-full bg-primaryBg flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-openSans text-pureblack">
                We connect our customers with the best.
              </h4>
            </div>

            <div>
              <button className="mt-[22px] py-4 px-14 bg-primaryBg text-white rouned rounded-[56px] border-2 border-darkBlue text-xl font-bold ">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second */}

      <div className="flex lg:items-end flex-col lg:flex-row-reverse justify-between gap-y-10 lg:mt-[180px] ">
        {/* left */}
        <div className="relative w-full max-w-[494px] mb-10 ">
          <img src={women} alt="" className="relative object-cover z-40 " />
          <img
            src={chartTwo}
            alt=""
            className=" absolute  -bottom-5 lg:-bottom-36 lg:left-10 z-50 shadow-md"
          />
        </div>

        {/* right */}
        <div className="flex flex-col items-start gap-y-10 w-full  px-4 lg:px-0">
          <h2 className="text-pureblack text-[36px] font-manrope lg:max-w-[493px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>

          <div className="flex flex-col items-start gap-y-6">
            <div className="w-[500px] rounded flex gap-x-[27px] bg-primaryBg text-white p-[24px] shadow-shadowConnect ">
              <div className=" flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.24 12.24C21.3658 11.1142 21.9983 9.58719 21.9983 7.99501C21.9983 6.40282 21.3658 4.87585 20.24 3.75001C19.1142 2.62416 17.5872 1.99167 15.995 1.99167C14.4028 1.99167 12.8758 2.62416 11.75 3.75001L5 10.5V19H13.5L20.24 12.24Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8L2 22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 15H9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-openSans text-white font-semibold">
                We connect our customers with the best.
              </h4>
            </div>

            <div className="w-[500px] rounded flex gap-x-[27px] text-white p-[24px] shadow-shadowConnect ">
              <div className=" flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_515)">
                      <path
                        d="M1.7749 12.6543C1.7749 12.6543 5.7749 4.6543 12.7749 4.6543C19.7749 4.6543 23.7749 12.6543 23.7749 12.6543C23.7749 12.6543 19.7749 20.6543 12.7749 20.6543C5.7749 20.6543 1.7749 12.6543 1.7749 12.6543Z"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.7749 15.6543C14.4318 15.6543 15.7749 14.3112 15.7749 12.6543C15.7749 10.9974 14.4318 9.6543 12.7749 9.6543C11.118 9.6543 9.7749 10.9974 9.7749 12.6543C9.7749 14.3112 11.118 15.6543 12.7749 15.6543Z"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_515">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.774902 0.654297)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-openSans text-pureblack font-semibold">
                Advisor success customer launch party.
              </h4>
            </div>

            <div className="w-[500px] rounded flex gap-x-[27px]  text-white p-[24px] shadow-shadowConnect ">
              <div className=" flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_521)">
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 1V3"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 21V23"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.22021 4.22L5.64021 5.64"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3601 18.36L19.7801 19.78"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 12H3"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 12H23"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.22021 19.78L5.64021 18.36"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3601 5.64L19.7801 4.22"
                        stroke="#0A2640"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_521">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-openSans text-pureblack font-semibold">
                We connect our customers with the best.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
