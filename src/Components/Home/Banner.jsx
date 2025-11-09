import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";

const slides = [
    {
        image: slide1,
        title: "Welcome to Study Mate",
        subtitle: "Your smart learning companion",
    },
    {
        image: slide2,
        title: "Learn Anytime, Anywhere",
        subtitle: "Access resources from any device",
    },
    {
        image: slide3,
        title: "Grow Your Knowledge",
        subtitle: "Join the future of online learning",
    },
];

const Banner = () => {
    return (
        <div className="w-full h-[70vh] relative mb-20">
            <Swiper
                pagination={{ dynamicBullets: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="w-full h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full">
                            {/* Background image */}
                            <img
                                src={slide.image}
                                alt={`Slide ${i + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                            {/* Text Content */}
                            <div
                                className="absolute bottom-20 left-10 md:left-20 text-white
                                animate-slide-up opacity-0">
                                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Animation styles */}
            <style>
                {`
          @keyframes slideUp {
            0% {
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .swiper-slide-active .animate-slide-up {
            animation: slideUp 2s ease forwards;
          }
        `}
            </style>
        </div>
    );
};

export default Banner;
