import { logodark } from "../../assets/getAssets";

const menusData = [
  {
    heading: "Landings",
    submenu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Products",
        path: "/",
      },
      {
        name: "Services",
        path: "/",
      },
    ],
  },
  {
    heading: "Company",
    submenu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Careers",
        path: "/",
      },
      {
        name: "Services",
        path: "/",
      },
    ],
  },
  {
    heading: "Resources",
    submenu: [
      {
        name: "Blog",
        path: "/",
      },
      {
        name: "Products",
        path: "/",
      },
      {
        name: "Services",
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="w-full py-[100px]">
      <div className="max-w-[1200px] mx-auto flex items-stretch gap-[179px] justify-between">
        {/* left */}
        <div className="w-full max-w-[300px]">
          <div className="mb-10">
            <img src={logodark} alt="" />
          </div>
          <div className="text-gray font-openSans text-base mb-[64px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </div>
          <div className="text-gray font-openSans text-base mt-auto">
            All rights reserved.
          </div>
        </div>

        {/* right */}
        <div className="flex-1 flex gap-[96px] items-start">
          {/* menus */}
          {menusData.map((menu, index) => {
            return (
              <div key={index} className="w-full max-w-[579px] h-full flex flex-col gap-8">
                <h4 className="font-bold font-openSans text-xl">
                  {menu.heading}
                </h4>
                <ul className="flex-1 flex flex-col items-start justify-between">
                    {menu.submenu.map((item,id)=>(<li className="text-gray font-openSans cursor-pointer" key={id}>{item.name}</li>))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
