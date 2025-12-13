import React from "react";
import { personal_data } from "../constants";

const PersonalData = () => {
  return (
    <section className="mx-auto w-full max-w-2xl flex justify-center items-center px-0 md:px-4">
      <div
        className="fixed bottom-0 to-transparent shadow-lg py-4 px-5 flex justify-center items-center z-50 space-x-5 mb-4 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu rounded-lg border-[#01ce90] border bg-[#0a0a0a]
         "
      >
        {personal_data.map((link, index) => (
          <a
            key={index}
            className={`text-white flex justify-center text-lg hover:text-[#01ce90] ${
              index === 0
                ? "relative after:content-[''] after:h-8 after:w-[1px] after:bg-gray-500 after:ml-9 after:absolute after:top-1/2 after:-translate-y-1/2"
                : ""
            }`}
            data-state="closed"
            rel="noopener noreferrer"
            target={index === 0 ? "_self" : "_blank"}
            href={link.href}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PersonalData;
