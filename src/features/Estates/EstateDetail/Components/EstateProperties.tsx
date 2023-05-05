import { IEstate } from "@encacap-group/types/dist/re";
import EstatePropertiesItem from "./EstatePropertiesItem";

interface EstatePropertiesProps {
  estate: IEstate;
}

const EstateProperties = ({ estate }: EstatePropertiesProps) => {
  return (
    <div className="mt-8 mb-4 border-t-2 border-b-2 border-gray-100">
      <div className="-my-0.5">
        <div className="grid grid-cols-2 pt-8 pb-6 xs:grid-cols-3 md:grid-cols-4 gap-y-4">
          <EstatePropertiesItem
            name="Giá bán"
            value={`${estate.price} ${estate.priceUnit.name}`}
            isHighlight
          />
          <EstatePropertiesItem
            name="Diện tích"
            value={`${estate.area} ${estate.areaUnit.name}`}
            isHighlight
          />
          <EstatePropertiesItem name="Mã BĐS" value={estate.customId ?? estate.id} />
          {estate.properties.map((property) => (
            <EstatePropertiesItem
              key={property.categoryPropertyId}
              name={property.categoryProperty.name}
              value={property.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateProperties;
