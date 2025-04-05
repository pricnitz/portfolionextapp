import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="min-h-100 p-10 md:px-20 lg:px-40 md:py-20 lg:py-30 flex flex-col gap-6">
            <h2 className="md:text-2xl text-xl relative z-20">P R O J E C T S</h2>
            {/* <p>Whether you're looking to build a website from scratch, upgrade an existing platform, or create custom features for your business, I can help with:</p> */}
            <div className="flex flex-wrap gap-6 ">          
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/projects/image.png"
                            height="1000"
                            width="1000"
                            className="h-40 md:60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ={20} className='flex flex-col gap-2 mt-4'>
                        <h3 className="text-lg relative z-20 font-semibold">Leads and Brand </h3>
                        <p className="text-sm relative z-20 text-gray-400">Implemented an admin panel to manage and update all sections as per requirements.</p>      
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">
                    <CardItem translateZ={20} target="__blank" className="px-4 py-2 rounded-xl flex gap-3 text-xs font-normal dark:text-white">
                            <Image src="/svg/javascript.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/bootstrap.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/laravel.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/mysql.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/php3.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                        </CardItem>
                        <CardItem translateZ={20} as={Link} href="https://leadsandbrands.com/" className="px-4 py-2 rounded-xl  dark:text-white text-black text-xs font-bold">
                            Visit Now
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                             src="/projects/samagracare.png"
                            height="1000"
                            width="1000"
                            className="h-40 md:60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                   
                    <CardItem translateZ={20} className='flex flex-col gap-2 mt-4'>
                        <h3 className="text-lg relative z-20 font-semibold">Samagra Care</h3>
                        <p className="text-sm relative z-20 text-gray-400">Implemented an admin panel to manage and update all sections as per requirements.</p>      
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">
                        <CardItem translateZ={20} target="__blank" className="px-4 py-2 rounded-xl flex gap-3 text-xs font-normal dark:text-white">
                            <Image src="/svg/javascript.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/bootstrap.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/laravel.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/mysql.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                            <Image src="/svg/php3.svg" height="1000" width="1000" className="h-5 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"/>
                        </CardItem>
                        <CardItem translateZ={20} as={Link} href="https://samagracare.samwad.digital" className="px-4 py-2 rounded-xl  dark:text-white text-black text-xs font-bold">
                            Visit Now
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
            </div>
        </div>
    )
}
