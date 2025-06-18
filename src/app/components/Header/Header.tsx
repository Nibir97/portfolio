'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Drawer from './DiagonalDrawer';
import '../Header/DiagonalDrawer.css';
import index from '@/app/page/portfolio-detail-design';

export default function Header() {
    const [selectedIndex1, setSelectedIndex1] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0)
        }
        window.addEventListener("scroll", handleScroll)

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const openDrawer = ()=>{
        setIsOpen(true)
    }

  return (
    <React.Fragment>
        <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
            <Drawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedIndex1={selectedIndex1}
                setSelectedIndex1={setSelectedIndex1}
            />
        </div>

        <header 
        className={`${
            isScrolled ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}
        // style={{ 
        //     backgroundColor: isScrolled ? "#fff" : "transparent",
        //     boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : ""
        //  }}
        >
            <div className="relative">
                <div 
                onClick={openDrawer}
                className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl">
                    <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
                        <Image 
                        src="/drawer.png" 
                        alt="drawer item" 
                        width={150}
                        height={40}
                        className="w-[150px] h-10" 
                        />
                    </div>
                </div>
            </div>

            <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
                <ul className="flex font-recoletaBlack flex-row items-center h-24">
                    {["Home", "Portfolio", "About Me", "Hire Me"].map((label, index) => (
                        <li key={label} className='group text-2xl relative font-bold mr-20'>
                            <span className='{`menu-effect transform opacity-100 ${selectedIndex1 === index ? "-rotate-12" : "rotate-12"} group-hover:-rotate-12 group-hover:opacity-100`}'></span>
                            <a 
                            href={
                                index === 0
                                    ? "/#home"
                                    : index === 1
                                    ? "/#portfolio"
                                    : index === 2
                                    ? "/#about-me-component"
                                    : "/page/contactme"
                            }
                            className={`menu-item ${selectedIndex1 === index ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                            onClick={() => setSelectedIndex1(index)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    </React.Fragment>
  )
}
