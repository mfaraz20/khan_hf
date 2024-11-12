import Image from "next/image";
import logo from "@/app/assests/Logo.png";

const footer = () => {
  return (
    <>
     <div className="w-[1920px] h-[461px]  py-[140px] px-[220px] bg-[#043873] flex justify-between text-white ">
            <div className="w-[1480px] h-[289px]  gap-[100px] grid justify-between ">
                <div className="w-[1480px] h-[169px] flex justify-between">
                    
                    <div className="w-[295px] ">
                        <Image src={logo} alt="logo"/>
                        <p className="w-[240px] h-[152px] font-normal text-[18px] leading-[30px] tracking-tight py-4 ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    
                    <div className="w-[295px] h-[127px] grid justify-between gap-[15px]">                    <p className="w-[68px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight text-[#FFFFFF]">Product</p>
                    <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight">Overview</p>
                    <p className="w-[50px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Pricing</p>
                    <p className="w-[177px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Customer stories</p>
                    </div>  

                    <div className="w-[295px] h-[130px] grid justify-between gap-[16px]">
                    <p className="w-[91px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight ">Resources</p>
                    <p className="w-[33px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Blog</p>
                    <p className="w-[128px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Guides & tutorials</p>
                    <p className="w-[130px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight">Help center</p>
                    </div>

                    <div className="w-[295px] h-[130px] grid justify-between gap-[16px]">
                    <p className="w-[83px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight ">Company</p>
                    <p className="w-[66px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">About us</p>
                    <p className="w-[62px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Careers</p>
                    <p className="w-[99px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight ">Media Kit</p>
                    </div>
                
                </div>  

                    <div className="w-[1480px] h-[20px] grid justify-center">
                        <div className="w-[169px] h-[20px] gap-[60px]">
                            <p className="w-[169px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF] ">©2021 Whitepace LLC.</p>
                        </div>
                    </div>
           
            </div>
        </div>
       




     
    </>

  )
}

export default footer