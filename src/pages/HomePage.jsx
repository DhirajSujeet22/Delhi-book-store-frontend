import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { genre, itemsData } from "../data/demoItem";
import ItemCard from "../components/cards/ItemCard";

import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import {
  AcademicCarousel,
  OfferCarousel,
  PromotionCarousel,
  SpotlightCarousel,
} from "../components/Carousel";

import { Link } from "react-router-dom";
import categoryService from "../services/category.service";
import LeftSidebar from "../components/LeftSidebar";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const response = await categoryService.getAllParent();
      if (response.data.result) {
        setCategory(response.data.result);
      }
      setLoading(false);
    };
    apiData();
  }, []);

  return (
    <div className=" w-full h-full grid grid-cols-12">
      {/* {left side bar menu} */}
      <LeftSidebar />
      {/* {left side bar menu} */}
      <div className=" col-span-12 lg:col-span-10  px-5 pb-4 ">
        {/* <Carousel /> */}
        <div className=" flex flex-col py-4 ">
          <h3 className=" font-bold text-2xl">
            Hot Off the press | Children books
          </h3>

          <div className=" relative   py-4 px-12 w-full   ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={6} // Default to 6 slides per view
              breakpoints={{
                1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                992: { slidesPerView: 4 }, // 992px and up: 4 slides
                768: { slidesPerView: 3 }, // 768px and up: 3 slides
                576: { slidesPerView: 2 }, // 576px and up: 2 slides
                0: { slidesPerView: 2 }, // Less than 576px: 1 slide
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              // pagination={{ clickable: true }}
            >
              {itemsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ItemCard image={item.imageUrl} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev custom-button text-slate-500 h-12 w-12 -left-2">
              <CiSquareChevLeft />
            </div>
            <div className="swiper-button-next custom-button text-slate-500 h-12 w-12 -right-2">
              <CiSquareChevRight />
            </div>
          </div>
        </div>

        <div>
          {" "}
          <PromotionCarousel />
        </div>

        <div className=" flex flex-col py-4 ">
          <h3 className=" font-bold text-2xl">Anticipated books of 2024</h3>

          <div className=" relative   py-4 px-12 w-full   ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={6} // Default to 6 slides per view
              breakpoints={{
                1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                992: { slidesPerView: 4 }, // 992px and up: 4 slides
                768: { slidesPerView: 3 }, // 768px and up: 3 slides
                576: { slidesPerView: 2 }, // 576px and up: 2 slides
                0: { slidesPerView: 2 }, // Less than 576px: 1 slide
              }}
              navigation={{
                prevEl: ".btn-2-prev",
                nextEl: ".btn-2-next",
              }}
            >
              {itemsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ItemCard image={item.imageUrl} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev btn-2-prev custom-button text-slate-500 h-12 w-12 -left-2">
              <CiSquareChevLeft />
            </div>
            <div className="swiper-button-next btn-2-next custom-button text-slate-500 h-12 w-12 -right-2">
              <CiSquareChevRight />
            </div>
          </div>
        </div>

        <div>
          <SpotlightCarousel />
        </div>

        <div className=" flex flex-col py-4 ">
          <h3 className=" font-bold text-2xl">2024 Booker Prize shortlist</h3>

          <div className=" relative overflow-auto lg:overflow-hidden   py-4 px-12 w-full  ">
            <div className=" overflow-autos flex justify-between gap-3 ">
              {itemsData.slice(0, 5).map((item, index) => (
                <ItemCard
                  key={index}
                  image={item.imageUrl}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" flex flex-col bg-[#EAEAEA] px-4 py-3 ">
          <div className="bg-[#FCBA03] py-3 px-4 flex flex-col gap-3">
            <h3 className="text-lg lg:text-xl font-semibold">Shop by genre</h3>
            <div className="grid grid-cols-12 gap-4">
              {genre.map((genreItem, index) => (
                <div key={index} className="w-full col-span-3 lg:col-span-2">
                  <img
                    className="w-full cursor-pointer"
                    src={genreItem.imageUrl}
                    alt={`genre-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#088657] py-3 flex flex-col gap-3">
            <h3 className="text-lg lg:text-xl font-semibold text-white pl-4">
              Books for all Academic needs
            </h3>

            <div className=" px-2">
              {" "}
              <AcademicCarousel />
            </div>
          </div>

          <div className=" flex bg bg-[#088657]">
            <div className=" w-56 h-auto">
              <img
                className=""
                src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_Exam-Books-rev._CB565488257_.png"
                alt=""
              />
            </div>
            <div className=" w-56 h-auto">
              <img
                className=""
                src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_School-books-rev._CB565488257_.png"
                alt=""
              />
            </div>
            <div className=" w-56 h-auto">
              <img
                className=""
                src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_University-booksrev._CB565488257_.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col py-4 ">
          <h3 className=" font-bold text-2xl">
            Barack Obama's 2024 reading list
          </h3>

          <div className=" relative   py-4 px-12 w-full   ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={6} // Default to 6 slides per view
              breakpoints={{
                1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                992: { slidesPerView: 4 }, // 992px and up: 4 slides
                768: { slidesPerView: 3 }, // 768px and up: 3 slides
                576: { slidesPerView: 2 }, // 576px and up: 2 slides
                0: { slidesPerView: 2 }, // Less than 576px: 1 slide
              }}
              navigation={{
                prevEl: ".btn-4-prev",
                nextEl: ".btn-4-next",
              }}
            >
              {itemsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ItemCard image={item.imageUrl} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev btn-4-prev custom-button text-slate-500 h-12 w-12 -left-2">
              <CiSquareChevLeft />
            </div>
            <div className="swiper-button-next btn-4-next custom-button text-slate-500 h-12 w-12 -right-2">
              <CiSquareChevRight />
            </div>
          </div>
        </div>

        <div>
          <OfferCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
