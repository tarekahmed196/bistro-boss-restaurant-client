import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] =useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div class="text-center">
        <button class="btn btn-outline border-0 border-b-4 mt-4 mx-auto">
          View Full Menu
        </button>
      </div>
      <div className="bg-black mt-20 mb-32">
        <h2
          style={{ fontFamily: "Raleway" }}
          className="text-4xl text-white p-28 text-center font-raleway"
        >
          Call Us: +8801518919051
        </h2>
      </div>
    </section>
  );
};

export default PopularMenu;
