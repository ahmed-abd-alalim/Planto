// ################
// --> stete context
// ################
export type props = {
  children: React.ReactNode;
};

export type productsType = {
  img: string;
  name: string;
  title: string;
  price: number;
};

export type reviewsType = {
  img: string;
  name: string;
  stars: number;
  review: string;
};

export type stateType = {
  products: productsType[];
  setProducts: React.Dispatch<React.SetStateAction<productsType[]>>;
  reviews: reviewsType[];
  setReviews: React.Dispatch<React.SetStateAction<reviewsType[]>>;
};
