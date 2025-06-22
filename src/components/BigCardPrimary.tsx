// import type
import type { productsType } from "@/assets/types";

// import icon
import { RiShoppingBag4Line } from "@/assets/icons";

const BigCard = ({
  caedStyle,
  cadrData,
}: {
  caedStyle: number;
  cadrData: productsType;
}) => {
  return (
    <div className="w-full md:h-[20rem] lg:h-[25rem] grid grid-cols-1 md:grid-cols-2 rounded-[2rem] md:rounded-[5rem] lg:rounded-[8rem] bg-[var(--color-primary)] border-1 border-[var(--border-secondary-color)] backdrop-blur-sm">
      <div
        className={`w-[20rem] md:w-[22rem] lg:w-[28rem] translate-y-[-5rem] scale-110 md:scale-110 m-auto order-1 ${
          caedStyle === 1 && "md:order-2"
        }`}
      >
        <img src={cadrData.img} alt="" width={"100%"} />
      </div>
      <div
        className={`md:h-[20rem] lg:h-[25rem] flex flex-col gap-4 justify-center translate-y-[-2.5rem] md:translate-y-0 px-5 md:px-10 md:py-3 lg:px-20 lg:py-5 order-2 ${
          caedStyle === 1 && "md:order-1"
        }`}
      >
        <h3 className="text-[var(--color-text-primary)] capitalize font-bold text-[1.5rem]">
          {cadrData.name}
        </h3>
        <p className="text-[var(--color-text-secondary)] font-medium text-[.8rem]">
          {cadrData.title}
        </p>
        <span className="text-[var(--color-text-primary)] font-bold text-[1.5rem]">
          Rs. {cadrData.price}/-
        </span>
        <div className="flex gap-4">
          <button className="border-1 border-[var(--color-text-primary)] rounded-md px-10 py-2 text-[var(--color-text-primary)] font-bold text-[1.1rem] cursor-pointer hover:opacity-80 transition-opacity">
            Explore
          </button>
          <button className="border-1 border-[var(--color-text-primary)] rounded-md px-3 text-[var(--color-text-primary)] text-[1.4rem] cursor-pointer hover:opacity-80 transition-opacity">
            <RiShoppingBag4Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
