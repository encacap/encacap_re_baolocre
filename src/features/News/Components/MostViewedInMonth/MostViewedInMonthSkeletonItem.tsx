import LoadingSkeleton from "../../../../common/LoadingSkeleton";

const MostViewedInMonthSkeletonItem = () => {
  return (
    <div className="flex py-5 border-b-2 border-gray-100 last:border-b-0">
      <LoadingSkeleton className="w-10 h-10 mr-4 rounded-lg" />
      <div className="flex-1">
        <LoadingSkeleton className="mb-3 last:mb-0" />
        <LoadingSkeleton className="mb-3 last:mb-0" />
        <LoadingSkeleton className="mb-3 last:mb-0" />
        <LoadingSkeleton className="mb-3 last:mb-0" />
      </div>
    </div>
  );
};

export default MostViewedInMonthSkeletonItem;
