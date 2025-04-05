
import Sociallinks from "./Sociallinks"

export default function Footer() {

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <div className="flex justify-between md:gap-6 gap-3 order-2 md:order-2">
        <div className="">
          <h2 className="text-xl font-semibold md:hidden">N I T E S H &nbsp; &nbsp; C H A N D R A &nbsp; &nbsp;<br /> A H I R W A R </h2>
          <h2 className="text-xl font-semibold hidden md:block">N I T E S H &nbsp; &nbsp; C H A N D R A &nbsp; &nbsp; A H I R W A R </h2>
          <p className="opacity-45 md:w-[490px]">Not just a coder—a creator of experiences. As a full-stack developer, I bring together art and engineering to build seamless, scalable, and engaging digital worlds.</p>
        </div>
        <div className="md:flex flex-col text-center hidden gap-6 md:w-[490px] ">
          <h2 className="text-xl font-semibold">F O L L O W &nbsp; &nbsp; M E</h2>
          <div className="flex justify-center gap-6">
          <Sociallinks />
          </div>
        </div>
      </div>
      <hr className="mt-16" />
      <p className="text-center text-xs opacity-60 mt-4">© Copyright 2024 . Made by Nitesh Chandra Ahirwar</p>
    </div>
  )
}
