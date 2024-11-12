

import Image from "next/image";
import Apple from "@/app/assests/Apple.png";
import Google from "@/app/assests/Google.png";
import Logo_Foot from "@/app/assests/Logo_Foot.png";
import Microsoft from "@/app/assests/Microsoft.png";
import Slack from "@/app/assests/Slack.png";



const sponsors = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px]  py-[140px] px-[220px]   grid place-items-center ">
        <div className="w-[1482px] h-[200px] text-[72px] items-center font-bold leading-[87.14px] tracking[-0.02em]  place-items-center ">
          <h1>Our sponsors</h1></div>
        <div className="w-[1482px] h-[71px] justify-between flex items-center" >
          <Image src={Apple} alt="apple"
            width={55.47} height={68} className="transition-transform duration-300 hover:scale-125" />
          <Image src={Microsoft} alt="microsoft" width={287} height={62} className="transition-transform duration-300 hover:scale-125 " />
          <Image src={Slack} alt="slack" width={280} height={71} className="transition-transform duration-300 hover:scale-125" />
          <Image src={Google} alt="google" width={211} height={69.81} className="transition-transform duration-300 hover:scale-125" />

        </div>
      </div>

    </>
  )

}


export default sponsors