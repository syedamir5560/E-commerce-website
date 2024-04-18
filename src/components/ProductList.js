
import React from "react";
import GrideView from "./GrideView";
import { useFilterContext } from "../Context/Filter_Context";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, gride_view } = useFilterContext()

  if (gride_view) {
    return <GrideView products={filter_products} />;
  }

  if (gride_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;


