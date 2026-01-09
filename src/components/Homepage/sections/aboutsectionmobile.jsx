import Image from "next/image";

export default function AboutMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <div className="w-fit h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px] relative flex items-center justify-center flex-col">
        <div className="w-80 h-60 relative">
          <Image
            src={"/last_lineup/jonitha.avif"}
            fill
            alt="VITOPIA"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col items-center gap-2 pb-6">
          <h2 className="text-[24px] text-white text-center font-Emilio font-bold">
            VITOPIA
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-center">
            About VITopia '24
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-justify">
          VITOPIA is the annual international cultural and sports festival
          conducted by VIT-AP University, celebrating its endless enthusiasm for
          various sports and art forms. VITOPIA 2024 marks the fifth edition of
          this cultural and sports extravaganza, scheduled for February 24th and
          25th, 2024. The sports event features 15+ indoor and outdoor games,
          while the cultural event includes over 20 prime cultural competitions.
        </p>
      </div>
      <div className="w-fit h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px] relative flex items-center justify-center flex-col">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitap_drone.webp"}
            fill
            alt="VITOPIA"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col items-center gap-2 pb-6">
          <h2 className="text-[24px] text-white text-center font-Emilio font-bold">
            VIT-AP
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-center">
            About VIT-AP
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-justify">
          VIT-AP University was established in 2017 in Amaravati, near Vijayawada, Andhra Pradesh, with a nurturing environment, state-of-the-art facilities, and an infrastructure covering 44,50,664 square meters, all within our sprawling 100-acre campus. VIT-AP University has achieved the prestigious #1 ranking as the Emerging Private University in India for three consecutive years (2022, 2023, and 2024) in the Outlook Ranking for Higher Education. Fostering a rich learning environment, our diverse community comprises over 17,500 students from all states, Union Territories, and 11 countries. We ensure that your academic journey leads to a promising career and higher study opportunities. With over 90% of our students getting placements spread across the globe and an impressive highest package of 38 LPA, the university also supports 150+ STAR Schemes, offering top packages of 24.7 LPA, empowering rural students for global opportunities. Our state-of-the-art infrastructure includes research facilities worth 8 crore INR, resulting in 3,271 publications in reputed journals and 594 published patents. We provide a nurturing atmosphere for entrepreneurial minds with 35,000 square feet of incubation and startup space dedicated to fostering innovation.
        </p>
      </div>
    </div>
  );
}
