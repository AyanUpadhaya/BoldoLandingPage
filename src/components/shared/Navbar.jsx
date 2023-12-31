import {logo} from "../../assets/getAssets.jsx";

const Navbar = ()=>{
	return <div className="text-white">
		<div className="max-w-[1200px] relative z-[100] mx-auto flex items-center justify-between px-4 xl:px-0" >
			<img src={logo} alt="" className="object-cover" />
			<div className="hidden md:flex items-center gap-10 ">
				<a href="" className="text-white font-openSans text-base font-semibold">Products</a>
				<a href="" className="text-white font-openSans text-base font-semibold">Services</a>
				<a href="" className="text-white font-openSans text-base font-semibold">About</a>
				<button className="py-2 px-10 bg-white rounded-[24px] border-2 border-white font-openSans text-darkBlue font-bold text-base">Log In</button>
			</div>
		</div>
	</div>
}

export default Navbar