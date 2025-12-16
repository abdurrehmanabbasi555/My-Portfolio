import React from "react";
import { DATA } from "../constants";
import ResumeIcon from "../assets/icons/ResumeIcon";
import resume from "../Resume.pdf";

const Info = () => {
  return (
    <section className="mx-auto w-full max-w-2xl mt-10 px-0 md:px-4">
      <div className="flex flex-wrap">

        <div className="flex flex-col ml-4 mt-2">
          <h1 className="text-xl text-white font-bold">
            {DATA.name}
          </h1>
          <p className="text-sm text-[#01ce90] font-medium mb-4">
            {DATA.role}
          </p>
        </div>
        <p className="max-w-[600px] font-thin text-sm sm:text-base mt-6">
          {DATA.description}
        </p>

        <a
          download=" Abdurrehman Abbasi Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Resume"
          className="inline-flex bg-[#141516fa] text-[#01ce90] items-center justify-center gap-2 whitespace-nowrap 
         rounded-sm text-xs md:text-sm font-medium
         shadow h-9 px-3 md:px-4 py-1.5 md:py-2 mt-3 border border-[#01ce90] hover:underline"
          href={resume}
        >
          <ResumeIcon /> Resume
        </a>
      </div>
    </section>
  );
};

export default Info;
