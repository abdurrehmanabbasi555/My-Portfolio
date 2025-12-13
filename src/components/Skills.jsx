import React from "react";
import { DATA } from "../constants/index.js";

const Skills = () => {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 md:px-4 mt-6">
      <div class="inline-block rounded-lg bg-[#08090a] text-[#01ce90] px-3 py-1 text-sm">&gt;_Skills</div>
      <h2 class="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Some of my skills</h2>
      <p class="text-white font-medium text-base md:text-sm/relaxed lg:text-sm/relaxed xl:text-base/relaxed">Here are the few skills I've learned & worked with.</p>
      <div className="flex flex-wrap gap-1 mt-10">
        {DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 text-[10px] sm:text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow border border-white hover:border-[#01ce90] rounded-sm text-white hover:text-[#01ce90]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
