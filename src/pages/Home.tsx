// import state
import { useStateContext } from "@/assets/state";

// import icon
import { FaPlay } from "@/assets/icons";

// import component
import {
  ProductCardSecondary,
  ReviewCardSecondary,
  BigCardPrimary,
  SectionName,
  ProductCardPrimary,
  ReviewCardPrimary,
  BigCardSecondary,
} from "@/components";

const Home = () => {
  const { products, reviews } = useStateContext();

  return (
    <>
      {/* header */}
      <header className="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-[60%_40%] px-5 lg:px-10">
        <div className="order-2 md:order-1 flex flex-col justify-between">
          <div className="text-center md:text-start mt-8 md:mt-0">
            <h1 className="capitalize text-[var(--color-text-primary)] font-semibold text-[2.5rem] md:text-[4rem] lg:text-[6rem] leading-[1.2]">
              Breath Natureal
            </h1>
            <h4 className="text-[var(--color-text-secondary)] font-medium md:ml-1 lg:ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="flex justify-center md:justify-start gap-5 items-center mt-5">
              <button className="w-[8rem] h-[2.5rem] border-2 border-[var(--color-text-primary)] rounded-md  text-[var(--color-text-primary)] capitalize font-medium cursor-pointer hover:opacity-80 transition-opacity">
                Explore
              </button>
              <div className="flex items-center gap-2 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity cursor-pointer">
                <div className="w-[2.5rem] h-[2.5rem] border-2 border-[var(--color-text-primary)] rounded-full flex justify-center items-center">
                  <FaPlay className="text-[.9rem] ml-[.2rem]" />
                </div>
                <span>Live Demo...</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start  mt-[2.2rem]  md:mt-[7rem] lg:mt-[9rem]">
            <ReviewCardSecondary reviewsData={reviews} />
          </div>
        </div>
        <div className="flex justify-center  mt-[3rem] order-1">
          <ProductCardSecondary cardData={products} />
        </div>
      </header>

      {/* trendy plants */}
      <section className="mt-[7rem] mb-[3rem] px-5 lg:px-10 flex flex-col gap-[6rem]">
        <SectionName sectionNmae={"Our Trendy plants"} />
        <BigCardPrimary caedStyle={0} cadrData={products[5]} />
        <BigCardPrimary caedStyle={1} cadrData={products[2]} />
      </section>

      {/* Top Selling */}
      <section className="mt-[7rem] mb-[3rem] px-5 lg:px-10 flex flex-col gap-[8rem]">
        <SectionName sectionNmae={"Our Top Selling"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[4rem] gap-y-[7rem] m-auto">
          {products.slice(1, 7).map((_, i) => (
            <ProductCardPrimary cadrData={products[i]} key={i} />
          ))}
        </div>
      </section>

      {/* Customer Review*/}
      <section className="mt-[7rem] mb-[3rem] px-5 lg:px-10 flex flex-col gap-[6rem]">
        <SectionName sectionNmae={"Customer Review"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[4rem] gap-y-[2rem] m-auto">
          {products.slice(0, 3).map((_, i) => (
            <ReviewCardPrimary reviewsData={reviews[i]} key={i} />
          ))}
        </div>
      </section>

      {/* Our Best o2*/}
      <section className="mt-[7rem] mb-[3rem] px-5 lg:px-10 flex flex-col gap-[6rem]">
        <SectionName sectionNmae={"Our Best o2"} />
        <BigCardSecondary cardData={products} />
      </section>
    </>
  );
};

export default Home;
