import { useEffect, useState } from "react";

// import type
import type { productsType } from "@/assets/types";

// import icon
import { FaChevronRight } from "@/assets/icons";

type inbutCardDataType = {
  id: number;
  img: string;
  title: string;
  disOne: string;
  disTwo: string;
};

const BigCardSecondary = ({ cardData }: { cardData: productsType[] }) => {
  const [itemIsView, setItemIsView] = useState<number>(0);

  const [cardView, setCardView] = useState<inbutCardDataType[]>([]);

  const inbutCardData: inbutCardDataType[] = [
    {
      id: 0,
      img: cardData[0].img,
      title: "We Have Small And Best O2 Plants Collection’s",
      disOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      disTwo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 1,
      img: cardData[1].img,
      title: "We Have Small And Best O2 Plants Collection’s",
      disOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      disTwo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      img: cardData[2].img,
      title: "We Have Small And Best O2 Plants Collection’s",
      disOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      disTwo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      img: cardData[3].img,
      title: "We Have Small And Best O2 Plants Collection’s",
      disOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      disTwo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  useEffect(() => {
    setCardView([inbutCardData[itemIsView]]);
  }, [itemIsView]);

  return (
    <>
      {cardView.map((item) => (
        <div
          key={item.id}
          className="w-full md:h-[30rem] grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] md:rounded-[5rem] bg-[var(--color-primary)] border-1 border-[var(--border-primary-color)]"
        >
          <div className="flex justify-center items-center lg:translate-y-[-3rem] scale-105">
            <img src={item.img} alt="" className="w-[30rem] animate-fade-in" />
          </div>
          <div className="flex flex-col justify-center gap-[1.5rem] md:gap-[2rem]  p-5 lg:p-15 mb-[1rem] md:mb-0">
            <h2 className="text-[var(--color-text-primary)] font-medium text-[1.6rem] animate-fade-right">
              {item.title}
            </h2>
            <p className="text-[var(--color-text-secondary)] animate-fade-right">
              {item.disOne}
            </p>
            <p className="text-[var(--color-text-secondary)] animate-fade-right">
              {item.disTwo}
            </p>
            <div className="w-full flex justify-between mt-3">
              <button className="text-[var(--color-text-primary)] font-medium border-1 border-[var(--color-text-primary)] py-2 px-10 rounded-md cursor-pointer animate-button-hover hover:text-[var(--color-background)]">
                Explore
              </button>
              <div className="w-[6rem] flex justify-between items-center text-[.9rem]">
                <FaChevronRight
                  className={`scale-x-[-1] cursor-pointer ${
                    itemIsView === 0
                      ? "text-[var(--border-primary-color)]"
                      : "text-[var(--color-text-primary)]"
                  }`}
                  onClick={() =>
                    setItemIsView(() =>
                      itemIsView === 0 ? itemIsView : itemIsView - 1
                    )
                  }
                />
                <span className="text-[var(--color-text-primary)] font-medium">
                  0{itemIsView + 1}/
                  <span className="text-[.7rem]"> 0{inbutCardData.length}</span>
                </span>
                <FaChevronRight
                  className={`cursor-pointer ${
                    inbutCardData.length === itemIsView + 1
                      ? "text-[var(--border-primary-color)]"
                      : "text-[var(--color-text-primary)]"
                  }`}
                  onClick={() =>
                    setItemIsView(() =>
                      inbutCardData.length === itemIsView + 1
                        ? itemIsView
                        : itemIsView + 1
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BigCardSecondary;
