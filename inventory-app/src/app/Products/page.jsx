import React from "react";
import ProductColumns from './productColumns'
import AddProducts from './AddProducts'

const Products = () => {
  return (
    <>
    <AddProducts/>
    <div className="mt-[4rem]">

      <ProductColumns/>
    </div>
    </>
  );
};

export default Products;
