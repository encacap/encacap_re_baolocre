import { HTMLAttributes } from "react";

const LocationIcon = (props: HTMLAttributes<SVGElement>) => {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LocationIcon;
