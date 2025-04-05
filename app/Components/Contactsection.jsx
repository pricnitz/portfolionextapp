import React from 'react'
import { Contact } from './Contact'

export default function Contactsection() {
    return (
        <div className='min-h-100 p-10 md:px-20 lg:px-40 md:py-20 lg:py-30 flex flex-col gap-6'>
            <h2 className='md:text-2xl text-xl relative text-center z-20'>C O N T A C T &nbsp;&nbsp; M E</h2>
            <div className='flex gap-6 flex-col-reverse md:flex-row'>
                <div className='flex flex-col justify-center gap-6 md:w-1/2'>
                    <div className="max-w-full bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-700 shadow-xl p-6 text-white space-y-6 rounded-xl">
                      
                        <div className="flex items-center gap-4">
                            <div className="bg-[#33AADD]/20 rounded-full p-3">
                                <i className="ri-phone-line text-[#33AADD] text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <a
                                    href="tel:+918109653732"
                                    className="font-medium hover:underline hover:text-[#33AADD] transition duration-300"
                                >
                                    +91 8109653732
                                </a>
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-4">
                            <div className="bg-[#9F55FF]/20 p-3 rounded-full">
                                <i className="ri-mail-line text-[#9F55FF] text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a
                                    href="mailto:anitesh123.ns@gmail.com"
                                    className="font-medium hover:underline hover:text-[#9F55FF] transition duration-300"
                                >
                                    anitesh123.ns@gmail.com
                                </a>
                            </div>
                        </div>

                      
                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 rounded-full">
                                <i className="ri-map-pin-line text-white text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <a
                                    href="https://www.google.com/maps/place/Bhopal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium hover:underline hover:text-white transition duration-300"
                                >
                                    Bhopal, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-full'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d802.2374273099292!2d77.43914692136366!3d23.206583654068087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e0!4m4!1s0x397c43b317863a1f%3A0x260c5a4f61f75d7b!3m2!1d23.2071796!2d77.43952829999999!4m3!3m2!1d23.2070735!2d77.43949289999999!5e0!3m2!1sen!2sin!4v1743867338747!5m2!1sen!2sin"
                            className='w-full md:min-w-full max-h-70 h-100  border-0 opacity-55 rounded-lg shadow-lg'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
