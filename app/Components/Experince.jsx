"use client";
// import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export default function Experince() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <h3 className="text-2xl"> Full Stack Developer | Leads and Brand (Present)</h3>
                    <p className="text-gray-400 text-xs md:text-sm font-normal mb-8">
                        Currently working as a Full Stack Developer at Leads and Brand, responsible for developing and maintaining web applications using React, Node.js, and MongoDB. Also managing and optimizing the company’s PHP-based website and maintaining Laravel projects.
                    </p>
                    <div className="text-gray-400 text-xs md:text-sm font-normal mb-8 list-inside">
                        <span className="flex gap-1">✅<p> Overseeing website performance, optimization, and feature enhancements.</p></span>
                        <span className="flex gap-1">✅<p> Managing the company's website built on PHP and maintaining Laravel projects.</p></span>
                        <span className="flex gap-1">✅<p> Leading new projects using the MERN stack to modernize the company’s web infrastructure.</p></span>
                        <span className="flex gap-1">✅<p> Balancing full-time work with freelancing, delivering robust web solutions across various domains.</p></span>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <h3 className="text-2xl"> Full Stack Developer | Abhiyantriki Technology</h3>
                    <p className="text-gray-400 text-xs md:text-sm font-normal mb-8">
                        Began as a UI Developer and was promoted to Full Stack Developer due to performance and skill growth. Developed and optimized multiple web applications, collaborating with designers and backend developers for seamless functionality.
                    </p>
                    <div className="text-gray-400 text-xs md:text-sm font-normal mb-8 list-inside">
                        <span className="flex gap-1">✅<p> Developed 30+ landing pages and 5+ web applications using HTML, CSS, JavaScript, jQuery, and Bootstrap.</p></span>
                        <span className="flex gap-1">✅<p> Collaborated with designers and backend teams to build high-performance web applications.</p></span>
                        <span className="flex gap-1">✅<p> Led UI/UX improvements, optimizing user engagement and experience.</p></span>

                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <h3 className="text-2xl">Intern | World Soft Technology</h3>
                    <p className="text-gray-400 text-xs md:text-sm font-normal mb-8">
                        Gained hands-on experience in front-end and back-end development, contributing to live projects and refining technical skills.
                    </p>
                    <div className="text-gray-400 text-xs md:text-sm font-normal mb-8 list-inside">
                        <span className="flex gap-1">✅<p> Worked with HTML, CSS, JavaScript, and PHP to develop web projects.</p></span>
                        <span className="flex gap-1">✅<p> Assisted in debugging, testing, and refining web applications.</p></span>
                        <span className="flex gap-1">✅<p> Strengthened problem-solving skills through real-world development challenges.</p></span>
                        <span className="flex gap-1">✅<p> Developed and maintained applications using React, MERN stack, and Laravel, ensuring scalability and performance.</p></span>
                    </div>
                </div>
            ),
        },
        {
            title: "Graduated: 2020",
            content: (
                <div>
                   <h3 className="text-2xl">Bachelor of Engineering  | Computer Science </h3>
                   <p className="text-gray-400 text-xs md:text-sm font-normal mb-8">
                     Sagar Institute of Science and Technology Research (SISTec), Bhopal, India
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="min-h-100 p-5 md:px-20 lg:px-40 md:py-20 lg:py-30 flex flex-col gap-6  rounded-lg">
            <Timeline data={data} />
        </div>
    )
}
