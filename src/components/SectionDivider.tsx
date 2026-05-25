export default function SectionDivider() {
  return (
    <div className="relative -mt-1">
      <svg
        className="w-full h-16 sm:h-24 md:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V120H0V40Z"
          fill="url(#divider-gradient)"
          opacity="0.12"
        />
        <path
          d="M0 60C240 20 480 80 720 60C960 40 1200 100 1440 60V120H0V60Z"
          fill="url(#divider-gradient)"
          opacity="0.06"
        />
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
