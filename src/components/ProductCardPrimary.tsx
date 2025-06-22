// import type
import type { productsType } from "@/assets/types";

// import icon
import { RiShoppingBag4Line } from "@/assets/icons";

const ProductCardPrimary = ({ cadrData }: { cadrData: productsType }) => {
  return (
    <div className="w-[20rem] h-[23rem] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={550}
        // height={668}
        viewBox="0 0 550 668"
        fill="none"
      >
        <foreignObject x={-6} y="-15.4705" width={562} height="682.87">
          <div
            style={{
              backdropFilter: "blur(12.5px)",
              clipPath: "url(#bgblur_0_8_48_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter="url(#filter0_d_8_48)" data-figma-bg-blur-radius={25}>
          <path
            d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
          <path
            d="M439.961 11.2793C486.994 4.82018 530 40.8828 530 88.3057V563C530 604.974 495.974 639 454 639H96C54.0264 639 20 604.974 20 563V88.3057C20.0001 40.8828 63.0061 4.82017 110.039 11.2793C161.32 18.3221 224.927 25.332 275 25.332C325.073 25.332 388.68 18.3221 439.961 11.2793Z"
            stroke="url(#paint0_linear_8_48)"
            strokeWidth={2}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_8_48"
            x={-6}
            y="-15.4705"
            width={562}
            height="682.87"
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
              result="effect1_dropShadow_8_48"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_48"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_0_8_48_clip_path"
            transform="translate(6 15.4705)"
          >
            <path d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_8_48"
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
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-[15rem] h-[57%] translate-y-[-5rem] m-auto scale-115">
          <img src={cadrData.img} alt="" width={"100%"} />
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h3 className="text-[1.2rem] text-[var(--color-text-primary)] capitalize font-semibold">
            {cadrData.name}
          </h3>
          <p className="text-[.8rem] text-[var(--color-text-secondary)] ">
            {cadrData.title.split(" ").slice(0, 8).join(" ")}
          </p>
          <div className="w-full flex justify-between items-center">
            <span className="text-[var(--color-text-primary)] text-[1.2rem] font-medium">
              Rs. {cadrData.price}/-
            </span>
            <button className="text-[var(--color-text-primary)] text-[.9rem] border-1 border-[var(--color-text-primary)] rounded-md py-2 px-2 hover:opacity-80 transition-opacity cursor-pointer">
              <RiShoppingBag4Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPrimary;
