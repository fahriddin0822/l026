import React from "react";
import { Link } from "react-router-dom"; // Import `Link`
import url1 from "@/assets/images/photo1.png";
import url2 from "@/assets/images/photo2.png";
import url3 from "@/assets/images/photo3.png";
import url4 from "@/assets/images/photo4.png";
import { IoArrowForwardSharp } from "react-icons/io5";

const images = [
  { src: url1, title: "November Outfits" },
  { src: url2, title: "Cashmere Set" },
  { src: url3, title: "The New Nordic" },
  { src: url4, title: "The Leather" },
];

const Articles = () => {
  return (
    <div className="mx-24 mt-24">
      <div className="">
        <h3 className="text-[30px] flex">Latest Articles</h3>
        <div className="flex items-center justify-end">
          <span>View more</span>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="container py-12 gap-6 flex overflow-auto">
        {images.map((image, index) => (
          <div className="h-[460px] border">
            <div key={index} className="h-[325px] border">
              <img
                src={image.src}
                className=" w-full h-full object-cover"
                alt={image.title}
              />
            </div>
            <div className=" left-12 bottom-12 mb-3 text-black ">
              <p className="text-[34px]">{image.title}</p>
              <Link
                to={"/"}
                className="flex gap-1 items-center border-b w-[96px] text-black"
              >
                <span>Collection</span>
                <IoArrowForwardSharp />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
