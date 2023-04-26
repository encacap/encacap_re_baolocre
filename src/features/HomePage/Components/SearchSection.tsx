import SearchIcon from "../../../common/Icons/SearchIcon";

const SearchSection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white border-b-2 border-gray-100 md:-top-14 md:border-b-0 md:shadow-lg md:shadow-gray-100 md:rounded-md md:mx-4 lg:mx-10 xl:mx-48">
      <div className="items-center hidden px-4 py-4 font-medium text-white uppercase md:flex bg-encacap-blue md:px-6">
        <SearchIcon className="w-4 mr-2" />
        Tìm kiếm bất động sản
      </div>
      <div className="py-5 border-gray-100 rounded-b-lg md:border-2 md:py-6 border-t-transparent">
        <form
          action="/bat-dong-san-ban"
          method="get"
          className="flex mx-4 bg-gray-100 border-2 border-gray-200 rounded-md md:mx-6"
        >
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full h-full outline-none rounded-md bg-transparent px-4 py-3.5 focus:ring-2 ring-encacap-main"
              name="query"
              id="query"
              placeholder="Tìm kiếm địa điểm, khu vực, ..."
            />
            <button
              type="submit"
              className="absolute flex items-center px-3 py-1 font-semibold text-white duration-200 rounded-md right-2 top-2 bg-encacap-main hover:bg-yellow-600"
            >
              <SearchIcon className="w-4 mr-2" />
              <span>Tìm</span>
              <span className="hidden md:inline-block md:ml-1">kiếm</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
