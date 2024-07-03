import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";

// import Navbar from "../components/Navbar";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="about bg-[#161716] pb-8 h-screen w-full flex flex-col justify-evenly items-center border-b  border-b-gray-100/30 "
      >
        <div className="w-full px-10 mb-6 flex justify-start">
          <h1 className="text-4xl underline decoration-dashed underline-offset-8 text-left flex items-center gap-3">
            About me <FaArrowRightLong />
          </h1>
        </div>

        <div className="box flex justify-between px-12">
          <div className="area1 w-[20%] flex flex-col gap-10">
            <div className="live">
              <h1 className="text-[#DBC7A7] font-semibold">Lives In -</h1>
              <p className="text-gray-100/80">Bhopal, India</p>
            </div>
            <div className="hobbies">
              <h1 className="text-[#DBC7A7] font-semibold">Hobbies -</h1>
              <ul className="text-gray-100/80">
                <li>Reading Novels</li>
                <li>Fitness</li>
                <li>Cricket</li>
                <li>Sketching</li>
              </ul>
            </div>
            <div className="education">
              <h1 className="text-[#DBC7A7] font-semibold">Education -</h1>
              <ul className="text-gray-100/80">
                <li>B. Tech (2021-2025)</li>
                <li>Major in Computer Science Engg</li>
                <li>Technocrats Institute of Technology, Bhopal</li>
              </ul>
            </div>
          </div>
          <div className="about_box h-[80%] px-8 flex items-center justify-center">
            {/* <h1 className="text-6xl font-['Odesty']">About</h1> */}
            <p className="text-2xl mt-6">
              I’m a <span className="text-[#DBC7A7]">Full stack web developer</span> with 2 years of experience in both
              Front-end and Back-end development. I enjoy creating user-friendly
              websites and applications using my skills. I'm a problem solver
              with a keen eye for detail, always keeping up with the latest
              industry trends.
            </p>
          </div>
          <div className="area2 w-[20%] flex flex-col">
            <h1 className="text-[#DBC7A7] font-semibold">Coursework -</h1>
            <ul className="text-gray-100/80">
              <li>Data Structures & Algorithms</li>
              <li>Applied Statics</li>
              <li>Linear Algebra</li>
              <li>Freelancing</li>
              <li>Solving puzzles</li>
            </ul>
          </div>
        </div>
        <div className="bottom_box flex flex-col gap-16 items-center">
          <div className="resume">
            <a href={assets.resume} target="blank"><button className="px-7 py-3 bg-[#405841] text-[#DBC7A7] text-xl font-semibold rounded-md flex items-center gap-3 hover:scale-105 duration-150 hover:bg-[#5f9361]">
              Resume
              <LuFileSpreadsheet />
            </button></a>
          </div>
          <div className="tech_stack flex gap-6">
            <div className="item">
              <AiOutlineHtml5 className="text-6xl text-[#ffffffd0]" />
              <h2>Html</h2>
            </div>
            <div className="item">
              <TbBrandCss3 className="text-6xl text-[#ffffffd0]" />
              <h2>CSS</h2>
            </div>
            <div className="item">
              <RiJavascriptFill className="text-6xl text-[#ffffffd0]" />
              <h2>Javascript</h2>
            </div>
            <div className="item">
              <TbBrandTypescript className="text-6xl text-[#ffffffd0]" />
              <h2>Typescript</h2>
            </div>
            <div className="item">
              <FaReact className="text-6xl text-[#ffffffd0]" />
              <h2>React</h2>
            </div>
            <div className="item">
              <RiNextjsLine className="text-6xl text-[#ffffffd0]" />
              <h2>NextJS</h2>
            </div>
            <div className="item">
              <FaNodeJs className="text-6xl text-[#ffffffd0]" />
              <h2>NodeJS</h2>
            </div>
            <div className="item">
              <BiLogoPostgresql className="text-6xl text-[#ffffffd0]" />
              <h2>PostgreSQL</h2>
            </div>
            <div className="item">
              <RiSupabaseLine className="text-6xl text-[#ffffffd0]" />
              <h2>Supabase</h2>
            </div>
            <div className="item">
              <FaFigma className="text-6xl text-[#ffffffd0]" />
              <h2>Figma</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
