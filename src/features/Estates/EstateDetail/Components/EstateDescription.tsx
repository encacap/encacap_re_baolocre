interface EstateDescriptionProps {
  data: string;
}

const EstateDescription = ({ data }: EstateDescriptionProps) => {
  return (
    <>
      <div className="text-lg font-semibold">Thông tin chi tiết</div>
      <div
        className="pt-3 pb-1 estate-content"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </>
  );
};

export default EstateDescription;
