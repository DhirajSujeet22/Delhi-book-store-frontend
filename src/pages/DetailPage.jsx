import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { genre, itemsData } from "../data/demoItem";
import ItemCard from "../components/cards/ItemCard";
import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import CustomImageMagnifier from "../components/CusomImageMagnifi";

const DetailPage = () => {
    const imageUrls = [
    "https://m.media-amazon.com/images/I/418IsoIOFNL._SX342_SY445_.jpg",
    "https://m.media-amazon.com/images/I/51pLL-xtd-L._AC_SF480,480_.jpg",
    "https://m.media-amazon.com/images/I/418IsoIOFNL._SX342_SY445_.jpg",
  ];
  const [imageUrl, setImageUrl] = useState(imageUrls[0]); // Default image URL

  const items = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png",
      text: "Free Delivery",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png",
      text: "Return Policy",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB562550117_.png",
      text: "Secure Delivery",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png",
      text: "Secure Transaction",
    },
  ];


  console.log(imageUrl);
  return (
    <>
    <div className="overflow-x-hidden">
      <div className="flex">
   

        <div className="basis-[25%] bg-white">
          <div className=" p-10 mb-10 h-[28rem] w-[25rem] ">
            <CustomImageMagnifier
              src={imageUrl}
              magnifierHeight={250}
              magnifierWidth={250}
              zoomLevel={2}
            />
          </div>
          <div className="flex">
            {imageUrls.map((url, index) => (
              <div className="cursor-pointer w-full p-6" key={index}>
                <img
                  onMouseOver={() => setImageUrl(url)}
                  src={url}
                  alt="book"
                  className="transition-transform duration-200 transform hover:scale-105" // Optional: Add hover effect
                />
              </div>
            ))}
          </div>
        </div>

        {/* second box  */}
        <div className="basis-[45%]  bg-white ">
          <div className="p-10">
            {/* Main Heading */}
            <h1 className="text-[28px] font-bold text-black">
              Sample Essays for the TOEFL Writing Test (TWE)
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mt-2">
              <span className="italic ">Paperback</span> – 1 January 2004
            </p>
            <p> by Lulu.Com (Author)</p>
            <div className="flex justify-between items-center p-6 bg-gray-50 h-25 mt-4">
              {/* Left Side: Rating and Stars */}
              <div className="flex items-center space-x-2">
                {/* Rating */}
                <span className="text-lg font-bold text-gray-800">4.2</span>

                {/* Stars */}
                <div className="flex">
                  {/* Star icons (you can use SVGs or a library like react-icons) */}
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a.812.812 0 011.451 0l1.857 3.764 4.155.604a.813.813 0 01.451 1.387l-3.004 2.929.709 4.134a.812.812 0 01-1.178.855l-3.716-1.953-3.715 1.953a.812.812 0 01-1.179-.855l.709-4.134-3.003-2.93a.812.812 0 01.45-1.386l4.156-.604 1.856-3.764z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Right Side: "See all formats and editions" */}
              <div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  See all formats and editions
                </a>
              </div>
            </div>
          </div>

          <p className="p-8 text-lg">
            Ets publishes its official list of TOEFL essay topics on its
            website. All essays assigned on the actual TOEFL test come from this
            list. This book contains 400 Sample essays with scores of 6.0. Each
            essay was written based on one of the topics from the ets official
            list. The book covers 100% of these topics. Each ets TOEFL writing
            topic has at least one Sample answer in this book. Students who take
            the computer-based test of English as a foreign language must also
            compose a written essay that counts towards part of their structure
            score. This book contains a total of 400 sample TOEFL essays,
            offering an intensive preparation for this part of the test. This
            book uses 10. 5pt garamond(other than the 13. 5pt used in the
            special edition), and has a total of 145, 000 words.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-white p-1 rounded-lg "
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={`Item ${index + 1}`}
                  className="w-20 h-20 object-cover mb-2 rounded-md"
                />
                {/* Text */}
                <p className="text-gray-700 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Third Container  */}
        <div className="basis-[30%] h-[100vh] bg-white mt-5 mr-4 p-8 ">
          <div className="border-4 border-gray-600 p-3 bg-blue-100 rounded-md hover:border-blue-500 transition-colors duration-300 h-20">
            {/* Title */}
            <p className="text-lg font-semibold text-gray-800">Paperback</p>
            {/* Price */}
            <p className="text-gray-600 mt-2">Rs.199.00 incl. GST</p>
          </div>

          <div className="p-4 border border-gray-300  bg-white">
            {/* Top Section with Price and Buy New */}
            <div className="flex justify-between items-center mb-4">
              {/* Left: Buy New */}
              <p className="text-lg font-semibold text-gray-800">Buy New</p>
              <p className="text-lg font-bold text-gray-800">
                Rs.199.00 incl. GST
              </p>
            </div>
            <p className="mt-10">Delivery by</p>
            <p>
              Or fastest delivery Wednesday, 16 October. Order within 7 hrs 38
              mins. Details
            </p>
            <h2 className="text-xl text-green-800 font-bold mt-20">
              {" "}
              In Stock
            </h2>
            <h1 className="text-lg ">Get Invoice</h1>
            <p>
              Sold by Repro Books-On-Demand and Fulfilled by Delhi Book Store.
            </p>
            <div className="flex space-x-2 items-center p-4 ">
              {/* Left Side: Quantity Text */}
              <p className="text-lg font-semibold text-gray-800">Quantity</p>

              {/* Right Side: Input Box */}
              <input
                type="number"
                className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                defaultValue={1}
                min={1}
              />
            </div>

            <p className="text-sm m-2 text-blue-600">Buying in bulk?</p>
            <div className="space-y-8">
              {/* Buy Now Button */}
              <Link to={'/checkout'}>
              <button className="w-full rounded-lg bg-yellow-400 text-white py-2 rounded hover:bg-yellow-700 transition duration-300">
                Buy Now
              </button>
              </Link>

              {/* Add to Cart Button */}
              <button className="w-full rounded-lg bg-yellow-400 text-white py-2 rounded hover:bg-yellow-700  transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-gray-300 py-4 mb-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4 ml-7">
          Product details
        </h2>

        <ul className="text-gray-700 space-y-2 ml-20">
          <li>
            <strong>Publisher</strong> : Lulu.Com (1 January 2004)
          </li>
          <li>
            <strong>Language</strong> : English
          </li>
          <li>
            <strong>Paperback</strong> : 156 pages
          </li>
          <li>
            <strong>ISBN-10</strong> : 1411607740
          </li>
          <li>
            <strong>ISBN-13</strong> : 978-1411607743
          </li>
          <li>
            <strong>Item Weight</strong> : 386 g
          </li>
          <li>
            <strong>Dimensions</strong> : 20.96 x 1.27 x 26.67 cm
          </li>
          <li>
            <strong>Country of Origin</strong> : India
          </li>
          <li>
            <strong>UNSPSC-Code</strong> : 55101500 (Printed publications)
            Report an incorrect code
          </li>
          <li>
            <strong>Best Sellers Rank</strong> : #519,616 in Books (See Top 100
            in Books)
          </li>
          <li>#442 in TOEFL</li>
          <li>#1,401 in Indian Railways Recruitment Exams</li>
          <li>#1,956 in Study Skills</li>
          <li>
            <strong>Customer Reviews</strong> : 4.2 out of 5 stars (32 ratings)
          </li>
        </ul>
      </div>
      <div className="max-w-4xl ml-0 p-4 md:p-6 lg:p-8 ">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-left">About the Author</h2>

        {/* Description text */}
        <p className="text-gray-700 mb-8 text-left">
          Follow authors to get new release updates, plus improved
          recommendations.
        </p>

        {/* Author section */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Image and follow button */}
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <img
              src="https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png"
              alt="Author"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 shadow-md"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 ml-10 rounded-full shadow-md">
              Follow
            </button>
          </div>

          {/* Author description */}
          <div className="flex-1">
            <h3 className="text-[30px] font-bold text-blue-600 mb-4">
              McGraw Hill
            </h3>
            <p className="text-gray-600">
              Discover more of the author’s books, see similar authors, read
              book recommendations, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Books  */}
      <div className=" flex flex-col py-4 ">
        <h3 className=" font-bold text-2xl m-4">
          Related items viewed by customers
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

      <div className="border border-gray-500 p-4 mb-10 md:p-6 lg:p-8 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-6 h-auto]">
        {/* First div */}
        <div className="items-center pt-8">
          <img
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/238aa0d4-d6af-49f5-8914-eab1248621c0._CR0,0,1683,1361_AC_QL10_SX1940_SY500_FMwebp_.png"
            alt=""
            className=" h-[180px] w-[180px]"
          />
        </div>

        {/* Second div */}
        <div className="items-center">
          <img
            src="https://m.media-amazon.com/images/I/81XS2mY6qfL._SY522_.jpg"
            alt=""
            className=" h-[300px] w-[200px]"
          />
        </div>

        {/* Third div */}
        <div className="flex-1 ">
          <h2 className="text-xl font-bold mb-2">
            Moby Dick by Herman Melville (Deluxe Hardbound Edition) – Classic
            American Literature| Adventure Novel
          </h2>
          <div className="flex items-center space-x-2 p-4">
            {/* Rating */}
            <span className="text-lg font-bold text-gray-800">4.2</span>

            {/* Stars */}
            <div className="flex ">
              {/* Star icons (you can use SVGs or a library like react-icons) */}
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927a.812.812 0 011.451 0l1.857 3.764 4.155.604a.813.813 0 01.451 1.387l-3.004 2.929.709 4.134a.812.812 0 01-1.178.855l-3.716-1.953-3.715 1.953a.812.812 0 01-1.179-.855l.709-4.134-3.003-2.93a.812.812 0 01.45-1.386l4.156-.604 1.856-3.764z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-6 ml-4">
            {/* Current Price */}
            <span className="text-xl font-bold text-red-600">Rs.185</span>

            {/* Original Price (crossed-out) */}
            <span className="text-gray-500 line-through">₹374</span>
          </div>
        </div>
      </div>

      {/* Books  */}
      <div className=" flex flex-col py-4 ">
        <h3 className=" font-bold text-2xl m-4">
          Customers who bought this item also bought
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

      {/* Books Best Sellers in Science Fiction & Fantasy  */}
      <div className=" flex flex-col py-4 ">
        <h3 className=" font-bold text-2xl m-4">
          Best Sellers in Science Fiction & Fantasy
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

      {/* Books Related to items you've viewed  */}
      <div className=" flex flex-col py-4 ">
        <h3 className=" font-bold text-2xl m-4">
          Related to items you've viewed
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
      </div>
    </>
  );
};

export default DetailPage;
