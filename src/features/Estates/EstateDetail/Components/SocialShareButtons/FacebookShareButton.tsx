import FacebookRectangleIcon from "../../../../../common/Icons/FacebookRectangleIcon";

const FacebookShareButton = () => {
  const handleClickShareButton = () => {
    const currentURL = window.location.href;
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
    window.open(facebookURL, "facebook-popup", "height=350,width=600");
  };

  return (
    <div
      className="flex items-center justify-center px-4 py-2 font-semibold text-center text-white duration-200 border-2 rounded-md cursor-pointer border-encacap-facebook bg-encacap-facebook hover:text-encacap-facebook hover:bg-white"
      onClick={handleClickShareButton}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center mr-4 text-lg">
        <FacebookRectangleIcon className="w-6" />
      </div>
      Chia sẻ
    </div>
  );
};

export default FacebookShareButton;
