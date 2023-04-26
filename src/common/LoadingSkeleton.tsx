import { twMerge } from "tailwind-merge";

interface LoadingSkeletonProps {
  className?: string;
}

function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return <div className={twMerge("w-full h-3 bg-gray-100 rounded-full animate-pulse", className)} />;
}

export default LoadingSkeleton;
