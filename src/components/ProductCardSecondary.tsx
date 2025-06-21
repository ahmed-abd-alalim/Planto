import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useStateContext } from "@/assets/state";

// import icon
import { FaChevronRight } from "@/assets/icons";

const ProductCardSecondary = () => {
  const { products } = useStateContext();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  const goToSlide = (idx: number): void => {
    instanceRef.current?.moveToIdx(idx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="w-[18rem] h-[21rem] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={550}
        // height={668}
        viewBox="0 0 550 668"
        fill="none"
      >
        <foreignObject x={-6} y="-15.4705" width={562} height="682.871">
          <div
            style={{
              backdropFilter: "blur(12.5px)",
              clipPath: "url(#bgblur_0_3_6_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter="url(#filter0_d_3_6)" data-figma-bg-blur-radius={25}>
          <path
            d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
          <path
            d="M439.961 11.2793C486.994 4.82018 530 40.8828 530 88.3057V563C530 604.974 495.974 639 454 639H96C54.0264 639 20 604.974 20 563V88.3057C20.0001 40.8828 63.0061 4.82017 110.039 11.2793C161.32 18.3221 224.927 25.332 275 25.332C325.073 25.332 388.68 18.3221 439.961 11.2793Z"
            stroke="url(#paint0_linear_3_6)"
            strokeWidth={2}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3_6"
            x={-6}
            y="-15.4705"
            width={562}
            height="682.871"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={9} />
            <feGaussianBlur stdDeviation="9.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_6"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_6"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_0_3_6_clip_path"
            transform="translate(6 15.4705)"
          >
            <path d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_3_6"
            x1={31}
            y1="56.5"
            x2={472}
            y2={616}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.52" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-[100%] h-[115%] absolute z-4 right-0 bottom-0 left-0 px-2 flex overflow-hidden translate-y-[-1rem]">
        <div className="overflow-hidden">
          <div className="w-full h-full flex keen-slider" ref={sliderRef}>
            {products.slice(1, 4).map((_, index) => (
              <div
                className="min-w-full p-3 flex flex-col justify-end keen-slider__slide"
                key={index}
              >
                <div className="w-[100%] h-[65%] scale-105 translate-y-[-.6rem]">
                  <img src={_.img} alt="" width={"100%"} />
                </div>
                <div className="w-[100%] h-[35%] flex flex-col justify-center items-start ml-3">
                  <span className="text-[var(--color-text-secondary)] text-[.8rem] capitalize">
                    Trendy House Plant
                  </span>
                  <h3 className="text-[var(--color-text-primary)] text-[1.2rem] font-normal mt-1">
                    {_.name}
                  </h3>
                  <button className="mt-3 border-2 border-[var(--color-text-secondary)] w-[6rem] h-[2rem] rounded-md text-[var(--color-text-primary)] text-[.7rem] font-medium cursor-pointer pb-[.1rem] hover:opacity-80 transition-opacity">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0  flex justify-center mt-3 space-x-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={(): void => goToSlide(idx)}
              className={` h-2 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? "bg-[var(--color-text-primary)] w-4"
                  : "bg-[var(--border-primary-color)] w-2"
              }`}
            />
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-[25%] right-[10%] z-5 cursor-pointer"
        onClick={(): void => instanceRef.current?.next()}
      >
        <FaChevronRight className="text-[var(--color-text-primary)] text-[.9rem]" />
      </div>
    </div>
  );
};

export default ProductCardSecondary;
