import React from "react";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GmailIcon from "../assets/icons/GmailIcon";

const Contact = () => {
  return (
    <section className="flex px-0 md:px-4 mb-32 mt-10 max-w-2xl mx-auto w-full" id="contact">
      <div className="flex flex-col justify-center space-y-3">
        <div className="inline-block rounded-lg text-[#01ce90] px-3 py-1 text-sm">&gt;_Contact
        </div>
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl">
        Contact Me
        </h2>
        <p
          className="mx-auto max-w-[450px] text-white font-medium text-xs/relaxed md:text-sm/relaxed lg:text-xl/relaxed
        xl:text-base/relaxed"
        >
          $ Have a query? Lets Talk!</p>
          <a
            className="flex items-center hover:text-[#01ce90] hover:underline gap-[10px]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/abdurrehman-abbasi-173217226/"
          >
            <LinkedinIcon/>
            LinkedIn
          </a>
          <a
            className="flex items-center hover:text-[#01ce90] hover:underline gap-[10px]"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:abbasiabdurrehman555@gmail.com"
          >
            <GmailIcon/>
            Email
          </a>
      </div>
    </section>
  );
};

export default Contact;
