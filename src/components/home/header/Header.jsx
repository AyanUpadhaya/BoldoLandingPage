import Navbar from "../../shared/Navbar";
import Hero from "../hero/Hero";

function Header() {
  return (
    <div className="relative overflow-x-hidden w-full bg-primaryBg pb-0 lg:pb-[64px]">
      <div className="hidden lg:block w-[1293px] h-[1293px] rounded-full bg-circle absolute -top-[750px] -right-[420px] z-[50]"></div>
      <div className="pt-[56px] mb-6 lg:mb-[64px]">
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
    </div>
  );
}

export default Header;
