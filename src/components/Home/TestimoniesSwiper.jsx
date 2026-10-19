import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import TestimoniesCard from "./TestimoniesCard";
import { testimonials } from "../../utils";

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
        {testimonials.map((el, idx) => (
          <SwiperSlide>
            <TestimoniesCard
              key={idx}
              name={el.name}
              stars={el.stars}
              message={el.message}
              image_url={el.img_url}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default TestimoniesSwiper;
