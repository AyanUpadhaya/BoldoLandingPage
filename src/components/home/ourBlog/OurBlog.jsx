import { blogone, blogthree, blogtwo, coolfeature, coolfeatureTwo, evencooler } from "../../../assets/getAssets";

const OurBlog = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative z-[100] mb-[120px]">
      {/* top */}
      <div className="text-center px-4 mb-20 max-w-[742px] mx-auto">
        <h4 className="font-openSans font-normal text-xl text-gray leading-8 text-center mb-3">
          Our Blog
        </h4>
        <h2 className="text-pureblack font-manrope text-5xl text-center leading-[72px]">
        Value proposition accelerator product management venture
        </h2>
      </div>

      {/* cards */}
      <div className=" flex flex-col md:flex-row gap-[50px] items-stretch mb-[84px]">
        <div className="flex flex-col gap-6 items-start w-full ">
          {/* image */}
          <div className="mb-6 rounded-3xl w-full">
            <img src={blogone} className="w-full" alt="" />
          </div>

           {/* button */}
           <div>
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Category</span>
            </button>
          </div>

          {/* captions */}
          <div className="mb-5">
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
            Pitch termsheet backing validation focus release.
            
            </h3>
          </div>

         
        </div>
        <div className="flex flex-col gap-6 items-start w-full ">
          {/* image */}
          <div className="mb-6 rounded-3xl w-full">
            <img src={blogtwo} className="w-full" alt="" />
          </div>

           {/* button */}
           <div>
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Category</span>
            </button>
          </div>

          {/* captions */}
          <div className="mb-5">
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
            Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
            </h3>
          </div>

         
        </div>
        <div className="flex flex-col gap-6 items-start w-full ">
          {/* image */}
          <div className="mb-6 rounded-3xl w-full">
            <img src={blogthree} className="w-full" alt="" />
          </div>

           {/* button */}
           <div>
            <button className="border-none outline-none flex items-center gap-4 ">
              <span className="text-xl font-bold text-darkBlue ">Category</span>
            </button>
          </div>

          {/* captions */}
          <div>
            {/* heading */}
            <h3 className="font-openSans text-2xl text-pureblack mb-3">
            Beta prototype sales iPad gen-z marketing network effects value proposition
            </h3>
          </div>

         
        </div>
        
      </div>
      <div className="flex justify-center">
      <button className="mt-[22px] py-4 px-14 text-darkBlue bg-white rouned rounded-[56px] border-2 border-darkBlue text-xl font-bold ">
                Load More
              </button>
      </div>
    </div>
  );
};

export default OurBlog;
