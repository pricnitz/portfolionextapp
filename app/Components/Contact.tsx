"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstname, lastname, email, contactnumber, message } = formData;
    const phoneNumber = "918109653732"; // 👈 Your WhatsApp number (with country code)

    const text = `New Signup Request 👤%0A
First Name: ${firstname}%0A
Last Name: ${lastname}%0A
Email: ${email}%0A
contactnumber: ${contactnumber}
message: ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Connect with us
      </h2>
     
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label className="text-gray-400" htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-gray-400" htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" onChange={handleChange} required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-gray-400" htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your mail" type="email" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label className="text-gray-400" htmlFor="contactnumber">Contact Number</Label>
          <Input id="contactnumber" placeholder="Enter your phone number" type="tel" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label className="text-gray-400" htmlFor="message">Message</Label>
          <Input id="message" placeholder="Enter your Message" type="string" onChange={handleChange} required />
        </LabelInputContainer>
        

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sent your message &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
      <p className="text-sm text-gray-400">Note: makesure your device is connected with WhatsApp</p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
