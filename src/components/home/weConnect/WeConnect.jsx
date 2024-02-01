import { useState } from "react";
import { weconnect } from "../../../assets/getAssets";
const WeConnect = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const handleCheck = (handler) => {
    handler((prev) => !prev);
  };

  return (
    <section className="py-[124px]">
      <div className="relative max-w-[1100px] mx-auto">
        <div className="w-full mb-14">
          <img src={weconnect} alt="" className="w-full object-cover" />
        </div>
        <div className="flex justify-between gap-[100px]">
          <div className="flex-1">
            <h2 className="text-pureblack text-[36px] font-manrope lg:max-w-[493px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
          </div>

          <div className="flex-1">
            {/* collapse 1 */}
            <div className="collapse p-0 m-0 border-b border-b-neutral-400 rounded-none bg-white max-w-max">
              <input
                type="radio"
                name="my-accordion-2"
                checked={isChecked}
                onClick={() => handleCheck(setIsChecked)}
                className="cursor-pointer px-0"
                onChange={() => {}}
              />
              <div className="collapse-title text-base font-semibold text-black-900 flex justify-between items-center gap-6 cursor-pointer p-0 m-0">
              <h4 className="text-base font-manrope text-black font-normal">
                We connect our customers with the best.
              </h4>
                
                
                <div className="w-[40px] h-[40px] bg-[#0A2640] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`duration-300 ${isChecked ? "rotate-90" : ""}`}
                  >
                    <path
                      d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                
              </div>
              <div className="collapse-content p-0 m-0">
                <p className="text-black-gray font-medium font-manrope">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid nostrum ea numquam impedit dolorum praesentium ipsa,
                  consequatur doloremque natus facilis blanditiis, dolores iure
               
                </p>
              </div>
            </div>


            {/* collapse 1 */}
            <div className="collapse p-0 m-0 border-b border-b-neutral-400 rounded-none bg-white max-w-max">
              <input
                type="radio"
                name="my-accordion-2"
                checked={isCheckedTwo}
                onClick={() => handleCheck(setIsCheckedTwo)}
                className="cursor-pointer px-0"
                onChange={() => {}}
              />
              <div className="collapse-title text-base font-semibold text-black-900 flex justify-between items-center gap-6 cursor-pointer p-0 m-0">
              <h4 className="text-base font-manrope text-black font-normal">
                We connect our customers with the best.
              </h4>
                
                
                <div className="w-[40px] h-[40px] bg-[#0A2640] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`duration-300 ${isCheckedTwo ? "rotate-90" : ""}`}
                  >
                    <path
                      d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                
              </div>
              <div className="collapse-content p-0 m-0">
                <p className="text-black-gray font-medium font-manrope">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid nostrum ea numquam impedit dolorum praesentium ipsa,
                  consequatur doloremque natus facilis blanditiis, dolores iure
               
                </p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default WeConnect;
