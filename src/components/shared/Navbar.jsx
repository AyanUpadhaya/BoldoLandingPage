import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/getAssets";

const Navbar = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth>640){
        setMobileNavVisible(false)
      }
    })
  },[])

  return (
    <div className="pt-8 lg:pt-[56px] mb-6 lg:mb-[64px]">
      <div className="text-white">
        <div className="max-w-[1200px] relative mx-auto flex items-center justify-between px-4 xl:px-0">
          <img src={logo} alt="" className="object-cover" />

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={toggleMobileNav}

            className="lg:hidden text-white focus:outline-none text-2xl"
          >
            {mobileNavVisible?'X':'☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 z-[100] ">
            <Link
              to="/"
              className="text-white font-openSans text-base font-semibold"
            >
              Products
            </Link>
            <Link
              to="/"
              className="text-white font-openSans text-base font-semibold"
            >
              Services
            </Link>
            <Link
              to="/"
              className="text-white font-openSans text-base font-semibold"
            >
              About
            </Link>
            <button className="py-2 px-10 bg-white rounded-[24px] border-2 border-white font-openSans text-darkBlue font-bold text-base transition-transform duration-200 transform active:scale-95">
              Log In
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileNavVisible && (
            <div
              className={`w-[90%] overflow-hidden transform duration-150  md:hidden absolute top-0 right-4 p-4 rounded-xl bg-[#fafafa] text-white flex flex-col items-start mt-[56px] z-[1000] `}
            >
              <Link to="/" className="py-4 text-black">
                Products
              </Link>
              <Link to="/" className="py-4 text-black">
                Services
              </Link>
              <Link to="/" className="py-4 text-black">
                About
              </Link>
              <button className="py-2 px-10 bg-white rounded-[24px] border-2 border-black font-openSans text-darkBlue font-bold text-base mt-4 transition-transform duration-200 transform active:scale-95">
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
