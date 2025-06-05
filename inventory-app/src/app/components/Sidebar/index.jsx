import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import { BiSolidReport } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="top-0 fixed left-0 w-[18rem] bg-green-700  h-screen  flex items-center flex-col ">
      <h1 className="text-5xl font-bold  text-white  mt-6 underline border-4 rounded-2xl p-3">
        <FaShoppingCart />
      </h1>
      <ul className="flex flex-col text-left gap-4 mt-10">
        <li>
          <Link
            href="/"
            className="text-white text-2xl mt-10 hover:bg-green-900 rounded-2xl px-18 py-1 flex gap-2"
          >
            <TiHome className="text-3xl"/> Home
          </Link>
        </li>
        <li>
          <Link
            href="/Sales"
            className="text-white text-2xl hover:bg-green-900 rounded-2xl px-18 py-1 flex gap-2"
          >
            <RiMoneyRupeeCircleFill className="text-3xl" /> Sales
          </Link>
        </li>
        <li>
          <Link
            href="/Products"
            className="text-white text-2xl  hover:bg-green-900 rounded-2xl px-18 py-1 flex gap-2"
          >
            <GrProductHunt /> Products
          </Link>
        </li>
        <li>
          <Link
            href="/Reports"
            className="text-white text-2xl hover:bg-green-900 rounded-2xl px-18 py-1 flex gap-2"
          >
            <BiSolidReport /> Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
