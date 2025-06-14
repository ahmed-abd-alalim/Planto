// ################
// --> stete context
// ################
export type props = {
  children: React.ReactNode
}

export type productsType = object[]

export type reviewsType = object[]

export type stateType = {
 products:  productsType
 setProducts : React.Dispatch<React.SetStateAction<productsType>>
 reviews:  reviewsType
 setReviews : React.Dispatch<React.SetStateAction<reviewsType>>
}