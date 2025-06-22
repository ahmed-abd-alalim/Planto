// import type
import type { reviewsType } from "@/assets/types";

// import icon
import { IoIosStar } from "@/assets/icons";

const ReviewCardPrimary = ({ reviewsData }: { reviewsData: reviewsType }) => {
  return (
    <div className="w-[20rem] h-[18rem] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={550}
        // height={508}
        viewBox="0 0 550 508"
        fill="none"
      >
        <foreignObject x={-6} y="-15.1548" width={562} height="522.555">
          <div
            style={{
              backdropFilter: "blur(12.5px)",
              clipPath: "url(#bgblur_0_13_83_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter="url(#filter0_d_13_83)" data-figma-bg-blur-radius={25}>
          <path
            d="M19 88.1697C19 41.5238 60.1363 5.47099 106.534 10.2752C158.414 15.6471 223.808 21.1168 275 21.1168C326.192 21.1168 391.586 15.6471 443.466 10.2752C489.864 5.47099 531 41.5237 531 88.1697V403C531 445.526 496.526 480 454 480H96C53.4741 480 19 445.526 19 403V88.1697Z"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
          <path
            d="M443.568 11.2695C489.394 6.52454 530 42.1348 530 88.1699V403C530 444.974 495.974 479 454 479H96C54.0264 479 20 444.974 20 403V88.1699C20 42.1348 60.6056 6.52454 106.432 11.2695C158.318 16.642 223.754 22.1172 275 22.1172C326.246 22.1172 391.682 16.642 443.568 11.2695Z"
            stroke="url(#paint0_linear_13_83)"
            strokeWidth={2}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_13_83"
            x={-6}
            y="-15.1548"
            width={562}
            height="522.555"
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
              result="effect1_dropShadow_13_83"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_13_83"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_0_13_83_clip_path"
            transform="translate(6 15.1548)"
          >
            <path d="M19 88.1697C19 41.5238 60.1363 5.47099 106.534 10.2752C158.414 15.6471 223.808 21.1168 275 21.1168C326.192 21.1168 391.586 15.6471 443.466 10.2752C489.864 5.47099 531 41.5237 531 88.1697V403C531 445.526 496.526 480 454 480H96C53.4741 480 19 445.526 19 403V88.1697Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_13_83"
            x1={31}
            y1="45.0932"
            x2="326.283"
            y2="547.718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.52" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col gap-5 justify-center p-12">
        <div className="flex items-center gap-5">
          <div className="w-[3.5rem] h-[3.5rem] overflow-hidden rounded-full">
            <img src={reviewsData.img} alt="" width={"100%"} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[1.1rem] text-[var(--color-text-primary)] font-medium">
              {reviewsData.name}
            </h2>
            <div className="flex items-center gap-1">
              {[0, 0, 0, 0].map((_, i) => (
                <IoIosStar className="text-[var(--color-stars)]" key={i} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-[var(--color-text-secondary)] text-[.9rem]">
            {reviewsData.review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardPrimary;
