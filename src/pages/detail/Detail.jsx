import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "@/api";
import { useFetch } from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/product/get/${id}`);

  console.log(id);

  return (
    <div className="container">
      <p>Detail</p>
      <img src={data?.image} alt="" />
    </div>
  );
};

export default Detail;
