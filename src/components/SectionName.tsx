const SectionName = ({ sectionNmae }: { sectionNmae: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[2rem] md:w-[2.5rem] rotate-180 translate-y-[.4rem] translate-x-[1rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 75" fill="none">
          <path
            d="M71.5 72L71.5 26C71.5 13.2974 61.2025 3 48.5 3L2.99999 3.00001"
            stroke="url(#paint0_linear_12_9)"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_9"
              x1={72}
              y1={74}
              x2={3}
              y2={3}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55B000" />
              <stop
                offset="0.500917"
                stopColor="white"
                stopOpacity="0.156606"
              />
              <stop offset={1} stopColor="#50790B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="capitalize text-[1.4rem] md:text-[2rem] text-[var(--color-text-primary)] font-bold">
        {sectionNmae}
      </span>
      <div className="w-[2rem] md:w-[2.5rem] translate-x-[-1rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 75" fill="none">
          <path
            d="M71.5 72L71.5 26C71.5 13.2974 61.2025 3 48.5 3L2.99999 3.00001"
            stroke="url(#paint0_linear_12_9)"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_9"
              x1={72}
              y1={74}
              x2={3}
              y2={3}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55B000" />
              <stop
                offset="0.500917"
                stopColor="white"
                stopOpacity="0.156606"
              />
              <stop offset={1} stopColor="#50790B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SectionName;
