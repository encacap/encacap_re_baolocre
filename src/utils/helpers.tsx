import { IEstate, slugify } from "@encacap-group/types/dist/re";

const getEstateLink = (estate: IEstate) => {
  const { title, id, category, province, district, ward } = estate;
  const slug = slugify(title);

  return `/bat-dong-san-ban/${category.code}/${province.code}/${district.code}/${ward.code}/${slug}/${id}`;
};

/**
 * Beauty phone number from XXXXXXXXXX to XXX XXX XXXX
 * @param {String} number
 * @returns {String}
 */
const beautyPhoneNumber = (number: string): string => {
  return number
    .split("")
    .map((item, index) => (index % 3 === 0 && index < 7 ? ` ${item}` : item))
    .join("");
};

export { beautyPhoneNumber, getEstateLink };
