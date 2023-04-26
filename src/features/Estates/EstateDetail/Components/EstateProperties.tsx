import EstatePropertiesItem from "./EstatePropertiesItem";

const EstateProperties = () => {
  return (
    <div className="mt-8 mb-4 border-t-2 border-b-2 border-gray-100">
      <div className="-my-0.5">
        <div className="grid grid-cols-2 pt-8 pb-6 xs:grid-cols-3 md:grid-cols-4 gap-y-4">
          <EstatePropertiesItem name="Giá bán" value="Thoả thuận" isHighlight />
          <EstatePropertiesItem name="Mã BĐS" value="CUSTOM" />
          <EstatePropertiesItem
            name="Diện tích"
            value={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <span>
                100 m<sup>2</sup>
              </span>
            }
          />
          <EstatePropertiesItem name="Phòng khách" value="2" />
          <EstatePropertiesItem name="Phòng ngủ" value="1" />
          <EstatePropertiesItem name="Phòng tắm" value="2" />
        </div>
      </div>
    </div>
  );
};

export default EstateProperties;
