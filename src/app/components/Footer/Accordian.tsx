'use client'
import React , { useState } from "react";
import { Transition } from "@headlessui/react";

interface AccordionProps {
  title: string;
  content: string[];
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#393939] mb-4 py-2">
      <div 
        className="flex justify-between items-center p-2 sm:p-4 w-full bg-[#223740]" 
        onClick={toggleAccordion}
      >
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <div className="bg-[#393939] h-8 w-8 flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 text-white transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="p-4 bg-[#223740]">
          {content.map((item, idx) => (
            <p key={idx} className="py-1 text-gray-400 font-sans">{item}</p>
          ))}
        </div>
      </Transition>
    </div>
  );
}
