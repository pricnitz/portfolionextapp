import React from 'react'
import { Button } from "./ui/moving-border";
import Image from "next/image";

export default function Expertiest() {
  return (
    <div className="min-h-100 p-10 md:px-20 lg:px-40 md:py-20 lg:py-30 flex flex-col gap-6">
      <h2 className="md:text-2xl text-xl relative z-20 text-center">S K I L L S</h2>
      <div className=" flex-wrap grid grid-cols-3 md:grid-cols-5 gap-6 mt-5">
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/html.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/css.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/bootstrap.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/javascript.svg" width={60} height={60} alt="javascript" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/tailwind.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/jquery.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/react.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/nextjs.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/acertinity.png" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/express1.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/nodejs.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/php3.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/laravel.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/mysql.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
        <Button className="flex items-center justify-center bg-black p-5 md:p-10 text-white text-xs md:text-sm font-normal mb-8">
          <Image src="/svg/mongo.svg" width={60} height={60} alt="Bootstrap" />
        </Button>
      </div>
    </div>
  );
}
