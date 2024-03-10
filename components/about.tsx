"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Hi👋, I'm a 23-year-old {" "}
        <span className="font-medium">Software developer</span>. Driven by a passion for technology and innovation, 
        I spend my days developing user-friendly software solutions and keeping 
        up with the latest advancements in the industry.{" "}
      </p>

      <p>
        <span className="italic">Aside from my work,</span>.
        <span className="font-medium">I'm an active member of the tech community, attending industry events, and connecting with other professionals to stay informed and share knowledge. 
        When I'm not coding or designing, I enjoy exploring new technologies and 
        experimenting with innovative ideas.... and ofc coffee with my friends🙂🙂.</span>
        
      </p>
    </motion.section>
  );
}
