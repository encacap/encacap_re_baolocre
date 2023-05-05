import { IEstate } from "@encacap-group/types/dist/re";
import EstateVertical from "../../../../common/Estate/EstateVertical";

interface SameDistrictEstatesProps {
  data: IEstate[];
  estate: IEstate;
}

const SameDistrictEstates = ({ data, estate }: SameDistrictEstatesProps) => {
  if (!data?.length) return null;

  return (
    <div className="pt-5 border-t-2 border-gray-100 mt-9">
      <div className="mt-1 mb-0 text-lg font-semibold md:mb-6">
        Bất động sản khác tại {estate.district.name}, {estate.province.name}
      </div>
      <div className="grid grid-cols-1 gap-0 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => (
          <EstateVertical key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SameDistrictEstates;
