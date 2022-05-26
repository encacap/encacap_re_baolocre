import EstateVertical from "../../../common/Estate/EstateVertical";

const EstateList = () => {
    return (
        <div className="my-4 border-b-2 border-gray-100 divide-y-2 divide-gray-100 md:divide-none md:border-b-0">
            <EstateVertical
                id="1"
                title="ĐẤT NỀN TP BẢO LỘC. Hẻm Trần Kế Xương"
                price="Thoả thuận"
                area={100}
                location={{
                    city: "Lâm Đồng",
                    district: "Thành phố Bảo Lộc",
                    ward: "Hẻm Trần Kế Xương",
                    street: "",
                }}
                description="🌈🌈🌈Chúng tôi cần bán lô đất thổ cư hẻm 75 Trần Tế Xương rộng 8m. Hẻm rộng 8m mới trải nhựa 6m. View đất đẹp thoáng. Khu dân cư đông đúc.
                ⚡️Cách trường cấp 3 Nguyễn Du 2Km. Có bán 3 lô liền kề
                ✅ Diện tích: 5x20
                ✅ Đất: Thổ cư 100m2
                ✅ Hướng: Bắc
                💰 Giá bán: 1.5 tỷ ( Giá có thương lượng khi tiếp người thiện chí)
                ☎️ Call: 0768112358"
                contact={{
                    phone: "098 765 4321",
                }}
                thumbnail="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_400/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                pictures={[]}
                videos={[]}
                avatar={{
                    type: "video",
                }}
            />
        </div>
    );
};

export default EstateList;
