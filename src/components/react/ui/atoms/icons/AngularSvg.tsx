import type { SVGProps } from "react";

export const AngularSvg = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 32 32"
      height="1em"
      width="1em"
    >
      <path
        d="M15.937 11.355l-2.057 4.879h4.433l-2.358-4.924-.019.044zm.027-7.055L4.685 8.269l1.782 14.777 9.508 5.226 9.557-5.297 1.782-14.776L15.963 4.3zm4.78 17.549l-1.531-3.545h-6.25l-1.398 3.497-2.601.048 6.973-15.513 7.216 15.513h-2.41z"
      />
    </svg>
  );
};
