"use client";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:text-left text-center md:items-start gap-6 justify-center min-h-screen relative w-full z-10 text-white p-10 md:p-20 lg:p-40">
      <h1 className="text-1xl flex gap-1">Welcome to My Portfolio</h1>
      <p className="text-lg">Full Stack Developer | MERN | Next.js | GSAP</p>
      <h2 className="md:text-4xl text-2xl flex gap-1">A dedicated Full Stack Developer skilled in building scalable and interactive web applications. </h2>
       <h5 className="hidden md:block ">Turning Ideas into Interactive <span className="text-left"><ContainerTextFlip words={["Web Experiences.", "User Interfaces.", "Digital Solutions.", "Applications."]} /></span></h5>
       <h5 className="md:hidden text-center">Turning Ideas into Interactive <br /> <br /><span className="text-center "><ContainerTextFlip words={["Web Experiences.", "User Interfaces.", "Digital Solutions.", "Applications."]} /></span></h5>
    </div>
  )
}
