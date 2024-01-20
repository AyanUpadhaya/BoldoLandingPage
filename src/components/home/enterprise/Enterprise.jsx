import { card_one, card_two, card_three } from "../../../assets/getAssets";
const Enterprise = () => {
  return (
    <div className="mt-[240px] bg-primaryBg ">
      <div className="relative max-w-[1200px] mx-auto   ">
        <div className="py-[96px] font-manrope">
          {/* top */}
          <div className="flex justify-between items-end mb-[72px]">
            <div className=" max-w-[736px]">
              <h3 className="text-5xl text-white leading-[72px]">
                An enterprise template to ramp up your company website
              </h3>
            </div>
            <div className="flex gap-4 items-center ">
              {/* left arrow */}
              <div className="w-[72px] h-[72px] bg-white rounded-full flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="39"
                    viewBox="0 0 36 39"
                    fill="none"
                  >
                    <path
                      d="M28.5 18L7.5 18"
                      stroke="#0A2640"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 28.5L7.5 18L18 7.5"
                      stroke="#0A2640"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* right arrow */}
              <div className="w-[72px] h-[72px] bg-white rounded-full flex justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="39"
                    viewBox="0 0 36 39"
                    fill="none"
                  >
                    <path
                      d="M7.5 21H28.5"
                      stroke="#0A2640"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 10.5L28.5 21L18 31.5"
                      stroke="#0A2640"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* bottom cards */}
          <div className="grid grid-cols-3 items-start gap-[22px]">
            <div className="card  bg-base-100 shadow-enterPriseCardShadow">
              <div className="p-10 flex flex-col gap-10">
                <p className="text-pureblack text-2xl font-openSans">
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </p>

                <div className="flex gap-3 items-center">
                  <img src={card_one} alt="" />
                  <div className="flex flex-col gap-[6px] font-openSans">
                    <h4 className="text-darkBlue font-bold">
                      Albus Dumbledore
                    </h4>
                    <p className="text-darkBlu text-sm">Manager @ Howarts</p>
                  </div>
                </div>
              </div>
            </div>


{/* two */}
            <div className="card  bg-base-100 shadow-enterPriseCardShadow">
              <div className="p-10 flex flex-col gap-10">
                <p className="text-pureblack text-2xl font-openSans ">
                “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </p>

                <div className="flex gap-3 items-center">
                  <img src={card_two} alt="" />
                  <div className="flex flex-col gap-[6px] font-openSans">
                    <h4 className="text-darkBlue font-bold">
                    Severus Snape
                    </h4>
                    <p className="text-darkBlu text-sm">Manager @ Slytherin</p>
                  </div>
                </div>
              </div>
            </div>

{/* three */}

            <div className="card  bg-base-100 shadow-enterPriseCardShadow">
              <div className="p-10 flex flex-col gap-10">
                <p className="text-pureblack text-2xl font-openSans">
                “Release facebook responsive web design business model canvas seed money monetization.”
                </p>

                <div className="flex gap-3 items-center">
                  <img src={card_three} alt="" />
                  <div className="flex flex-col gap-[6px] font-openSans">
                    <h4 className="text-darkBlue font-bold">
                    Harry Potter
                    </h4>
                    <p className="text-darkBlu text-sm">Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
