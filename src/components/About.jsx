import React from "react";
import Markdown from "react-markdown";
import { DATA } from "../constants/index.js";

const About = () => {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 md:px-4 mt-6" id="about">
      <div class="inline-block rounded-lg px-3 py-1 text-sm text-[#01ce90]">&gt;_About</div>
      <h2 className="text-3xl text-white font-bold">About Myself</h2>
      <Markdown className="text-pretty text-sm sm:text-base font-normal text-white mt-10">
        {DATA.summary}
      </Markdown>
    </section>
  );
};

export default About;
