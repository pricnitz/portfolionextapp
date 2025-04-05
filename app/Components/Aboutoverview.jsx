"use client";
import React from "react";
import { BackgroundGradient } from "../Components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

export default function Aboutoverview() {
    return (
        <div className="min-h-100 p-10 md:px-20 lg:px-40 md:py-20 lg:py-30 flex flex-col gap-6">
            <h2 className="md:text-2xl text-xl hidden md:flex justify-center text-left relative z-20">W H A T &nbsp;&nbsp; I &nbsp;&nbsp; C A N &nbsp;&nbsp; D O &nbsp;&nbsp; F O R &nbsp;&nbsp; Y O U</h2>
            <h2 className="md:text-2xl text-xl md:hidden text-center relative z-20">W H A T &nbsp;&nbsp; I &nbsp;&nbsp; C A N &nbsp;&nbsp; D O &nbsp;&nbsp;<br /> F O R &nbsp;&nbsp;  Y O U</h2>
            <p className="md:text-center ">Whether you're looking to build a website from scratch, upgrade an existing platform, or create custom features for your business, I can help with:</p>

            <div className="flex flex-wrap justify-center md:justify-items-start gap-6 mt-4">
                <BackgroundGradient className="rounded-[5px] h-50 max-w-70 md:max-w-80 w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg relative z-20 font-semibold">Custom Web Applications</h3>
                        <p className="text-sm relative z-20 text-gray-400">Tailored solutions for your business needs.</p>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient className="rounded-[5px] h-50 max-w-70 md:max-w-80 w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg relative z-20 font-semibold">Responsive Websites</h3>
                        <p className="text-sm relative z-20 text-gray-400">Ensuring your website works across all devices.</p>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient className="rounded-[5px] h-50 max-w-70 md:max-w-80 w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg relative z-20 font-semibold">UI/UX Optimization</h3>
                        <p className="text-sm relative z-20 text-gray-400">Enhancing usability and design for better customer engagement.</p>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient className="rounded-[5px] h-50 max-w-70 md:max-w-80 w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg relative z-20 font-semibold">E-Commerce Solutions</h3>
                        <p className="text-sm relative z-20 text-gray-400">Integrating payment gateways, shopping carts, and secure transactions.</p>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient className="rounded-[5px] h-50 max-w-70 md:max-w-80 w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg relative z-20 font-semibold">Bug Fixes & Performance Improvements</h3>
                        <p className="text-sm relative z-20 text-gray-400">Boosting your website’s speed and reliability.</p>
                    </div>
                </BackgroundGradient>

            </div>
        </div>
    )
}
