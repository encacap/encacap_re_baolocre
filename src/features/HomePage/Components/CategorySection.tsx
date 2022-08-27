import CategoryItem from "./CategoryItem";

const CategorySection = () => (
  <section className="pt-10 md:pt-6 lg:px-10 xl:px-48 md:pb-12">
    <div className="flex flex-col items-center">
      <div className="">
        <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
          Mọi thứ bạn cần
        </div>
        <div className="pt-3 text-2xl md:pb-3 md:text-4xl">Các danh mục</div>
        <div className="hidden w-20 h-1 mx-auto mt-4 md:block bg-encacap-main" />
      </div>
      <div className="grid w-full grid-cols-3 gap-4 px-4 lg:gap-10 md:mt-10 md:pb-10 lg:px-0">
        <CategoryItem
          href="/bat-dong-san-ban"
          name="Bất động sản bán"
          image="/images/categories/bat_dong_san_ban.jpg"
        />
        <CategoryItem href="/tin-tuc" name="Tin tức" image="/images/categories/tin_tuc.png" />
        <CategoryItem
          href="/thu-vien-nha-mau"
          name="Thư viện nhà mẫu"
          image="/images/categories/thu_vien_nha_mau.png"
        />
      </div>
    </div>
  </section>
);

export default CategorySection;
