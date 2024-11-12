import Image from "next/image";
import logo from "@/app/assests/Logo.png";
const Navbar = () => {
    return (
        <>
            <div className="md:w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center ">
                <div className="w-[191px] h-[34px] ransition-transform duration-300 hover:scale-125 ">
                    <Image src={logo} alt="Logo" /></div>
                    <div className="w-[737.5px] h-[60px] flex justify-between items-center ">
                    <div className="w-[549px] h-[23px] ">
                        <ul className="flex flex-row justify-between text-white text-[20px] ">
                            <li className="hover:underline">Products</li> 
                            <li className="hover:underline">Solutions</li>
                            <li className="hover:underline">Resources</li>
                            <li className="hover:underline">Pricing</li>
                        </ul >
                        </div>
                        <div className="w-[126px] h-[60px]  text-[20px] text-[#043873]">
                    <button className=" px-10 py-4 rounded-lg bg-[#FFE492] transition-transform duration-300 hover:scale-105 hover:bg-blue-300">Login</button>
                    </div>

                    
                </div>


            </div>
        </>
    )
}

export default Navbar













