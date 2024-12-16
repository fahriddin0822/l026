import React from "react";

import url1 from "@/assets/images/c_img_1.png";
import url2 from "@/assets/images/c_img_2.png";
import url3 from "@/assets/images/c_img_3.png";
import url4 from "@/assets/images/c_img_4.png";
import url5 from "@/assets/images/c_img_5.png";
import url6 from "@/assets/images/c_img_6.png";

const urls = [url1, url2, url3, url4, url5, url6, url6];

const Category = ({ data }) => {
  return (
    <div className="container">
      <p className="text-center mb-12 text-[40px] font-semibold">
        Shop by categories
      </p>

      <div className="flex flex-wrap gap-6">
        {data?.map((item, inx) => (
          <div key={inx} className="text-center">
            <img
              src={urls[inx]}
              className="w-[167px] h-[167px] rounded-full"
              alt=""
            />
            <p className="mt-3 font-semibold text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
