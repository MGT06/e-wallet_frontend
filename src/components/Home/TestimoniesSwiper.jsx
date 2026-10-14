import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import TestimoniesCard from "./TestimoniesCard";

const TestimoniesSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-white mb-12"
      >
        <SwiperSlide>
          <TestimoniesCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniesCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniesCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniesCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimoniesSwiper;
