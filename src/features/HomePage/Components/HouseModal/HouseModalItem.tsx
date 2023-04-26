import Image from "next/image";

function HouseModalItem() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md shadow-black/10 group">
      <div className="relative w-full aspect-video">
        <Image
          src="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1647420564/baolocre_news/ur0hkfzwhv3issd4u4vb.jpg"
          layout="fill"
          className="object-cover object-center w-full h-full duration-150 group-hover:scale-110"
          alt="House Modal"
        />
        <div className="absolute inset-0 flex px-5 py-4 duration-150 bg-black bg-opacity-40">
          <div className="mt-auto font-semibold text-white">
            <div>Mẫu nhà cấp 4 đẹp ngất ngây con gà tây. Không xem thì thôi.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseModalItem;
