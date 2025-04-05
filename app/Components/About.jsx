"use client";
import React from "react";
import { Boxes } from "../Components/ui/background-boxes";
import { cn } from "../lib/utils";
import { CardSpotlight } from "../Components/ui/card-spotlight";
// import Aboutoverview from "./Aboutoverview";




export default function About() {
    return (
        <div className="min-h-100 p-10 md:px-20 lg:px-40 md:py-20 lg:py-30 relative w-full overflow-hidden bg-black  flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className=" flex flex-col gap-6">
                <h2 className={cn("md:text-2xl md:text-left text-center text-xl relative z-20")}>W H A T &nbsp; &nbsp; I &nbsp; &nbsp;  D O ?</h2>
                <h3 className={cn("md:text-xl md:text-left text-sm relative z-20")}>I offer end-to-end development services for businesses, startups, and individual projects, focusing on:</h3>
                <div className={cn("w-full flex flex-col md:flex-row relative gap-3 z-20")}>
                    <CardSpotlight className="h-96 max-w-80 md:max-w-96 w-100">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg relative z-20  font-semibold"><i className="ri-code-s-slash-line"></i> &nbsp; Front-End Development</h3>
                            <p className="text-sm relative z-20  text-gray-400">Crafting modern, responsive UIs using.</p>
                            <ul className="flex flex-col gap-2 mt-4 text-gray-400">
                                <li className="text-sm relative z-20"><i className="ri-html5-line"></i> HTML</li>
                                <li className="text-sm relative z-20"><i className="ri-css3-line"></i> CSS,Taiwindcss</li>
                                <li className="text-sm relative z-20"><i id="my-icon" className="ri-sun-line"></i> JQuery</li>
                                <li className="text-sm relative z-20"><i className="ri-bootstrap-line"></i> Bootstrap</li>
                                <li className="text-sm relative z-20"><i className="ri-javascript-line"></i> JavaScript</li>
                                <li className="text-sm relative z-20"><i className="ri-reactjs-fill"></i> ReactJS,NextJS</li> 
                            </ul>
                        </div>
                    </CardSpotlight>
                   
                    <CardSpotlight className="h-96 max-w-80 md:max-w-96 w-100">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg relative z-20  font-semibold"><i className="ri-code-s-slash-line"></i> &nbsp; Back-End Developmen</h3>
                            <p className="text-sm relative z-20  text-gray-400"> Developing scalable server-side logic using.</p>
                            <ul className="flex flex-col gap-2 mt-4 text-gray-400">
                                <li className="text-sm relative z-20"><i className="ri-nodejs-line"></i> Node.js</li>
                                <li className="text-sm relative z-20"><i className="ri-npmjs-line"></i> Express.js</li>
                                <li className="text-sm relative z-20"><i className="ri-php-line"></i> Php</li>
                                {/* <li className="text-sm relative z-20"><i className="ri-laravel-line"></i> Laravel</li> */}
                            </ul>
                            
                        </div>
                    </CardSpotlight>
                    <CardSpotlight className="h-96 max-w-80 md:max-w-96 w-100">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg relative z-20  font-semibold"><i className="ri-code-s-slash-line"></i> &nbsp; Database</h3>
                            <p className="text-sm relative z-20  text-gray-400 ">Managing databases like.</p>
                            <ul className="flex flex-col gap-2 mt-4 text-gray-400">
                                <li className="text-sm relative z-20"><i className="ri-database-line"></i> MySQL</li>
                                <li className="text-sm relative z-20"><i className="ri-database-2-line"></i> MongoDB</li> 
                            </ul>
                        </div>
                    </CardSpotlight>
                   

                </div>
                <hr className={cn("relative z-20 mt-8 text-gray-400")}/>
                <div>
                <h4 className={cn("text-sm md:text-md relative z-20 text-gray-400")}>   ✅ From design to deployment, I handle the full development lifecycle, ensuring cohesive integration of front-end and back-end components.</h4>
                <h4 className={cn("text-sm md:text-md relative z-20 text-gray-400 mt-2")}>   ✅ Experience in creating and consuming <strong className="text-gray-300">RESTful APIs</strong>, ensuring smooth data transfer between systems and third-party services.</h4>
                </div>
            </div>
            
        </div>

    )
}
