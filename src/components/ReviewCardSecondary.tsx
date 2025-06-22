// import type
import type { reviewsType } from "@/assets/types";

// import icon
import { IoIosStar } from "@/assets/icons";

const ReviewCardSecondary = ({
  reviewsData,
}: {
  reviewsData: reviewsType[];
}) => {
  return (
    <div className="w-[18rem] h-[10rem] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={409}
        // height={237}
        viewBox="0 0 409 237"
        fill="none"
      >
        <foreignObject x="-20.2" y="-20.2" width="449.4" height="277.4">
          <div
            style={{
              backdropFilter: "blur(10.1px)",
              clipPath: "url(#bgblur_0_6_54_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <path
          data-figma-bg-blur-radius="20.2"
          d="M45 1H364C388.301 1 408 20.6995 408 45V192C408 216.301 388.301 236 364 236H45C20.6995 236 1 216.301 1 192V45C1 20.6995 20.6995 1 45 1Z"
          fill="white"
          fillOpacity="0.05"
          stroke="url(#paint0_linear_6_54)"
          strokeWidth={2}
        />
        <defs>
          <clipPath
            id="bgblur_0_6_54_clip_path"
            transform="translate(20.2 20.2)"
          >
            <path d="M45 1H364C388.301 1 408 20.6995 408 45V192C408 216.301 388.301 236 364 236H45C20.6995 236 1 216.301 1 192V45C1 20.6995 20.6995 1 45 1Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_6_54"
            x1="-9.99365e-07"
            y1={18}
            x2="403.742"
            y2="246.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.42" />
            <stop offset="0.0001" stopColor="white" stopOpacity="0.34" />
            <stop offset="0.525917" stopColor="white" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full h-full absolute top-0 left-0 p-7">
        <div className="mb-3 flex items-center gap-5">
          <div className="w-[2.8rem] h-[2.8rem] rounded-full overflow-hidden">
            <img src={reviewsData[3].img} alt="" width={"100%"} />
          </div>
          <div>
            <span className="text-[var(--color-text-primary)]">
              {reviewsData[3].name}
            </span>
            <div className="flex gap-1">
              {[0, 0, 0, 0].map((_, i) => (
                <IoIosStar
                  className="text-[var(--color-stars)] text-[.8rem]"
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-[var(--color-text-secondary)] text-[.8rem]">
          {reviewsData[3].review.split(" ").slice(0, 17).join(" ")}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSecondary;
