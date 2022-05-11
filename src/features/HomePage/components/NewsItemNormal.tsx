const NewsItemNormal = () => {
    return (
        <a href="/" className="flex items-center py-4 hover:text-encacap-main">
            <div className="flex-shrink-0 w-24 h-16 mr-4">
                <img
                    src="http://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1643088772/baolocre_news/ncbw52hgpiensaadmafa.jpg"
                    alt="<%= newsItem.title %>"
                    className="object-cover object-center w-full h-full rounded-md "
                />
            </div>
            <div>
                <div className="font-semibold line-clamp-2">
                    <span>Cao tốc Tân Phú - Bảo Lộc khởi công tháng 10/2022</span>
                </div>
            </div>
        </a>
    );
};

export default NewsItemNormal;
