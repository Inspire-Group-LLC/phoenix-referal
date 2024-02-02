import { Navigation, Pagination, Autoplay} from "swiper/modules";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Slider.scss";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import CustomPagination from "./CustomPagination";
import sliderBg from "../../images/sliderBg.jpg";

export default () => {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide.",
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide.",
      image: "path/to/image2.jpg",
    },
    // ... more slides
  ];

  SwiperCore.use([Autoplay])

  return (

    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div
            className="swip-slide"
            style={{ backgroundImage: `url(${sliderBg})` }}
          >
            <h1>Гайд</h1>
            <h3>По продвижению</h3>
            <p>
              Публикуйте привлекательный контент с реферальной ссылкой,
              используя хэштеги и призывы к действию. Поддерживайте
              вовлеченность аудитории и сотрудничайте с партнерами для
              максимального распространения.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swip-slide"
            style={{ backgroundImage: `url(${sliderBg})` }}
          >
            <h1>Второй Слайд</h1>
            <h3>По продвижению</h3>
            <p>
              Публикуйте привлекательный контент с реферальной ссылкой,
              используя хэштеги и призывы к действию. Поддерживайте
              вовлеченность аудитории и сотрудничайте с партнерами для
              максимального распространения.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="nav-btns">
        <SlidePrevButton></SlidePrevButton>
        <CustomPagination></CustomPagination>
        <SlideNextButton></SlideNextButton>
      </div>
    </div>
  );
};
