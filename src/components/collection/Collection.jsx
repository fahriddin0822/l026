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

const Collection = () => {
  return (
    <div className="py-12 container grid grid-cols-2 gap-6">
      {images.map((image, index) => (
        <div key={index} className="h-[664px] border relative">
          <img
            src={image.src}
            className="absolute w-full h-full object-cover"
            alt={image.title}
          />
          <div className="absolute left-12 bottom-12 text-white mb-3 ">
            <p className="text-[34px]">{image.title}</p>
            <Link
              to={"/"}
              className="flex gap-1 items-center border-b w-[96px]"
            >
              <span>Collection</span>
              <IoArrowForwardSharp />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
