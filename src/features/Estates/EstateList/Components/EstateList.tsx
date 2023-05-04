import { IEstate } from "@encacap-group/types/dist/re";
import EstateHorizontal from "../../../../common/Estate/EstateHorizontal";

interface EstateListProps {
  estates: IEstate[];
}

const EstateList = ({ estates }: EstateListProps) => {
  return (
    <div className="mt-4 mb-6 border-gray-100 divide-y-2 divide-gray-100 md:divide-none md:border-b-0">
      {estates.map((estate, index) => (
        <EstateHorizontal key={estate.id} estate={estate} special={index === 0} />
      ))}
    </div>
  );
};

export default EstateList;
