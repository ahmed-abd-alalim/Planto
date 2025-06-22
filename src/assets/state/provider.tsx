import { StateContext } from "./context";
import { useState } from "react";

// import types
import type { props, productsType, reviewsType } from "@/assets/types";

// import json data
import productsData from "@storage/products.json";
import reviewsData from "@storage/reviews.json";

export const StateProvider = ({ children }: props): React.JSX.Element => {
  const [products, setProducts] = useState<productsType[]>(productsData);
  const [reviews, setReviews] = useState<reviewsType[]>(reviewsData);

  return (
    <StateContext.Provider
      value={{ products, setProducts, reviews, setReviews }}
    >
      {children}
    </StateContext.Provider>
  );
};
