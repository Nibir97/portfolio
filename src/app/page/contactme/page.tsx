'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { Hind } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CallToAction from '@/app/components/CallToAction/CallToAction';

const hind = Hind({
subsets: ["latin"],
weight: ["300", "400", "500", "600", "700"],
});

type ContactFormState = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

export default function ContactPage() {

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    const numericValue = value.replace(/[^0-9]/g, "")
    setState(prev => ({...prev, phoneNumber:numericValue}));
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    })
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ...state
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      setLoading(false);
      clearState();
      if (!response.error) {
        toast(response.message);
      } else {
        toast("Something went wrong");
      }
    } catch {
      setLoading(false);
      clearState();
      toast("Something went wrong");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer/>
      <div className='flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4'>
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className='flex flex-col items-center justify-center w-full h-full bg-[#223740]/70 backdrop-brightness-50'>
            <div className='text-center bg-[#4BAFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
              <a href='#contact' className='cursor-pointer'>Contact Form</a>
            </div>
            <div className='mt-[10px]'>
              <h1 className='recoletaBold text-5xl text-[#4BAFDE] p-2 text-center tracking-wide'>Hire Me</h1>
            </div>
            <div className='flex justify-center text-center mt-[10px] md:w-[700px]'>
              <p className='text-white font-[300] text-center text-xl'>
                Are you looking for a responsible, professional full-stack developer and designer for your website or your web application projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
          </div>
        </div>
        <div className='px-[20px]'>
          <div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full'>
            <div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
              <div 
                className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className='flex items-center gap-[15px]'>
                  <div>
                    <FaLocationDot size={40} color='#48AFDE'/>
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-[#4BAFDE] text-[14px]'>
                      <p>Location...</p>
                    </div>
                    <div className='font-semibold text-[20px] tracking-wide'>
                      <p>Visit Us At:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className='text-[#666666]'>Fakirapool, Dhaka</p>
                </div>
                <div>
                  <p className='text-[#666666]'>Fakirapool, Dhaka</p>
                </div>
              </div>
              <div 
                className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className='flex items-center gap-[15px]'>
                  <div>
                    <FiPhoneCall size={40} color='#48AFDE'/>
                  </div>
                      <div className='flex flex-col'>
                        <div className='text-[#4BAFDE] text-[14px]'>
                          <p>24*7 Service..</p>
                        </div>
                        <div className='font-semibold text-[20px] tracking-wide'>
                          <p>Call Us On</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-[#666666]'>Tel: +123456789</p>
                    </div>
                    <div>
                      <p className='text-[#666666]'>Mob: +987654321</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
                  <div 
                  className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                  style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
                  >
                    <div className='flex items-center gap-[15px]'>
                      <div>
                        <AiFillMail size={40} color='#48AFDE'/>
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-[#4BAFDE] text-[14px]'>
                          <p>Drop A Line</p>
                        </div>
                        <div className='font-semibold text-[20px] tracking-wide'>
                          <p>Mail Address</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-[#666666]'>info@moinulhossainnibir.info</p>
                    </div>
                    <div>
                      <p className='text-[#666666]'>dev@moinulhossainnibir.info</p>
                    </div>
                  </div>
                  <div 
                  className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                  style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
                  >
                    <div className='flex items-center gap-[15px]'>
                      <div>
                        <AiOutlineFieldTime size={40} color='#48AFDE'/>
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-[#4BAFDE] text-[14px]'>
                          <p>Office Hours..</p>
                        </div>
                        <div className='font-semibold text-[20px] tracking-wide'>
                          <p>Opening Time</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-[#666666]'>Mon - Fri : 9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className='text-[#666666]'>Sunday (Closed)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div
        id='contact'
        className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10 mb-[-160px]'
        >
          <div 
          className='hidden md:block relative w-[50%] xl:w-[50%] h-[550px] rounded-xl md:w-full lg:w-[50%] bg-center bg-cover'
          style={{ backgroundImage: `url('/customer-service.jpeg')` }}
          >
            <div className='absolute h-full w-full bg-gradient-to-t from-[#223740] via-[#223740] shadow-inner opacity-70'></div>
            <div className='absolute inset-0 flex flex-col gap-[20px] items-center justify-center text-white shadow-lg p-6'>
              <div className='text-4xl xl:mt-[150px] mt-0 rounded-full px-[15px] py-[15px] bg-[#48AFDE] text-white'>
                <FaHeadphones/>
              </div>
              <div className='font-semibold text-[24px]'>Chat With Live!</div>
              <div>
                <p className='text-center mt-5 font-[200] text-xl'>
                  {" "}
                  Are you looking for a responsible, professional full-stack developer and designer for your website or your web application projects? Just leave me a message and tell me how I can help.
                </p>
              </div>
              <div>
                <button className='bg-[#48AFDE] text-white mb-[30px] px-4 py-2 hover:bg-[#223740] transition-color rounded-xl'>Let&apos;s chat</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg'>
              Contact Us
            </div>
            <div className=''>
              <p className='text-[30px] text-[#4BAFDE]'>
                {" "}
                Request A Call Back ! Feel Free To Reach & Contact Us.
              </p>
            </div>
            <form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
              <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
                <input 
                type='text' 
                name='name'
                placeholder='Your Name...'
                required
                onChange={handleChange}
                value={state.name}
                className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
                />
                <input 
                type='email' 
                name='email'
                placeholder='Your Email...'
                required
                onChange={handleChange}
                value={state.email}
                className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
                />
              </div>
              <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
                <input 
                type='text' 
                name='phoneNumber'
                placeholder='Your Number...'
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
                />
                <input 
                type='text' 
                name='subject'
                placeholder='Your Subject...'
                required
                onChange={handleChange}
                value={state.subject}
                className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
                />
              </div>
              <div className={`${hind.className}`}>
                <textarea
                required
                onChange={handleChange}
                value={state.message}
                name='message'
                placeholder='Your Message...'
                className='px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200'
                />
              </div>
              <div>
                {
                  loading &&(
                    <div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full"></div>
                  )
                }
                <button className='bg-[#48AFDE] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#223740] transition-colors duration-300 font-semibold rounded-lg text-white'>Send Us Message</button>
              </div>
            </form>
          </div>
        </div>
      <CallToAction/>
    </React.Fragment>
  )
}
