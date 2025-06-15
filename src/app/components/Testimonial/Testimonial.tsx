import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Testimonial() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "10px",
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial">
      <div
        className="hidden md:block max-h-[450px] py-12 lg:px-12 md:px-5 px-3 rounded-lg"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="lg:container mx-auto px-0 sm:max-h-[350px]">
          <div className="text-center">
            <h2 className="font-extrabold text-5xl mb-6 text-[#48AEDD]">
              What My Customers Says About Me
            </h2>
            <p className={`max-w-2xl font-[200] font-recoletaBold mx-auto mb-12 lg:mb-24`}>
              My clients and students are always pleased with my detailed
              explanations. Read what my clients are saying about how I helped
              them make a difference in their lives.
            </p>
          </div>
          <Slider {...settings} className="cursor-all-scroll">
            
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-0">
              <div className="w-[100%] sm:w-[95%] pl-20 m-auto rounded-2xl p-4 lg:p-6 min-h-[250px]"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
              >
                <div className="flex">
                  <div className="min-w-[100px]">
                    <img src="nibir.png"
                    className="w-20 h-20 rounded-full" alt="client photo"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col">
                    <div className="font-medium text-base">Md. Moinul Hossain Nibir</div>
                    <div className={`font-[300] ${hind.className} text-[#48AEDD]`}>
                      YouTube Student
                    </div>
                    <p className={`mb-6 font-[200] font-recoletaBlack min-h-[70px] text-[15px] mt-3`}>
                      man I'm not gay but I love you for what you did. thank you. nobody.. seriously nobody teaches this way explaining every class of tailwind and everything you write. people just say that go and download my code from github. but man you are the best. the amazing guide. thanks guru. thanks a ton.❤️❤️❤️❤️❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
}
