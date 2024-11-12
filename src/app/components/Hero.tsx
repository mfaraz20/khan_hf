import Image from "next/image";
import bolls from "@/app/assests/bolls.png";
const Hero = () => {
  return (
        <>
            {/* (first Page) */}

            <div className=" w-[1920px] py-[140px] px-[220px]   bg-[#043873] top-[92px] text-white flex items-center">

                <div className="w-[656px] h-[361px] ">
                    <div className="w-[656px] h-[238px]">
                        <h2 className=" font-bold text-[64px] leading-[77.5px] tracking-[-0.02em] mb-[24px]">Get More Done with whitepace</h2>
                        <p className="font-normal text-lg leading-[30px] tracking-[-0.-2em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                        <button className="w-[219px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9] p-4 mt-14 tracking-[-0.-2em] leading-[23px] transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Try Whitespace Free →</button>
                    </div>
                </div>
                <div className="w-[824px] h-[549px] bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>

            </div>

            {/* (second Page) */}

            <div className=" w-[1920px] py-[140px] px-[220px] gap-[60px] bg-white top-[921px] flex items-center">

                <div className="w-[672px] h-[411px]">
                    <div className="w-[672px] h-[288px] ">
                        <h1 className=" w-[672px] h-174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] mb-[24px]">
                            Project  Management</h1>
                        <p className=" font-normal text-lg leading-[30px] tracking-[-0.-2em]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note. </p>
                        <button className="w-[201px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9] p-5 mt-14 tracking-[-0.-2em] leading-[23px] text-white transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Get Started →</button>
                    </div>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>

            </div>

            {/* (Third Page) */}

            <div className=" w-[1480px] h-[661px] bg-white flex items-center">

                <div className="w-[710px] h-[661px] ml-56">
                    <Image src={bolls} alt="bolls" className="transition-transform duration-300 hover:scale-110"/></div>
                <div className="w-[672px] h-[400px] px-[200px] ">
                    <div className="w-[670px] h-[171px]  ">
                        <h1 className=" w-[670px] h-171px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] mb-[24px] ">
                            Work together</h1>
                        <p className=" font-normal text-lg leading-[30px] tracking-[-0.-2em]">With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.</p>
                        <button className="w-[186px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9]  text-white p-5 mt-14 tracking-[-0.-2em] leading-[23px] transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Try it now →</button>
                    </div>
                </div>

            </div>

            {/* (fourth Page) */}

            <div className=" w-[1920px]  py-[140px] px-[220px]  bg-[#043873] gap-[98] text-white flex items-center">

                <div className="w-[697px] h-[294px] ">
                    <div className="w-[697px] h-[238px]">
                        <h1 className=" font-bold text-[64px] leading-[77.5px] tracking-[-0.02em] mb-[24px]">Use as Extension</h1>
                        <p className="  font-normal  text-lg leading-[30px] tracking-[-0.-2em]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>
                        <button className="w-[171px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9] p-5 mt-14 tracking-[-0.-2em] leading-[23px] transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Let’s Go→</button>
                    </div>
                </div>
                <div className="w-[686px] h-[479px] ml-20  bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>

            </div>

          {/* (fifith Page) */}

          <div className=" w-[1920px]  py-[140px] px-[220px]   bg-white flex items-center">

          <div className="w-[714px] h-[532px] bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>
              <div className="w-[669px] h-[411px] px-[100px]  ">
                  <div className="w-[669px] h-[288px]    ">
                      <h1 className=" w-[670px] h-171px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] mb-[24px] ">
                      Customise it to your needs</h1>
                      <p className=" font-normal text-lg leading-[30px] tracking-[-0.-2em]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                      <button className="w-[171px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9]  text-white p-5 mt-14 tracking-[-0.-2em] leading-[23px] transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Let’s Go→</button>
                  </div>
              </div>

          </div>

          {/* (sixth Page) */}

          <div className=" w-[1920px] py-[140px] px-[220px]  bg-[#043873] top-[92px] text-white ">

              <div className="w-[1481px] h-[294px]  place-items-center ">
                  <div className="w-[1064px] h-[171px] place-items-center">
                      <h2 className=" font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-[24px] mr-12">Your work, everywhere you are</h2>
                      <p className="font-normal text-lg leading-[30px] tracking-[-0.-2em] ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                      <button className="w-[195px] h-[63px] font-[500px] text-lg rounded-lg bg-[#4F9CF9] p-5 mt-14 tracking-[-0.-2em] leading-[23px] transition-transform duration-300 hover:scale-105 hover:bg-gray-800">Try Taskey →</button>
                  </div>
              </div>


          </div>



        </>
    )
}

export default Hero