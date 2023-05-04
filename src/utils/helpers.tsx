import { ICategory, IEstate, slugify } from "@encacap-group/types/dist/re";
import { ESTATE_BASE_URL } from "../constants/common";

const getEstateLink = (estate: IEstate) => {
  const { title, id, category, province, district, ward } = estate;
  const slug = slugify(title);

  return `/${ESTATE_BASE_URL}/${category.code}/${province.code}/${district.code}/${ward.code}/${slug}/${id}`;
};

const getEstateCategoryLink = (category: ICategory) => {
  const { code } = category;

  return `/${ESTATE_BASE_URL}/${code}`;
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

export { beautyPhoneNumber, getEstateCategoryLink, getEstateLink };
