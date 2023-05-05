import { CATEGORY_GROUP_ENUM, ICategory } from "@encacap-group/types/dist/re";
import { CATEGORY_API_PATH } from "../constants/apis";
import axiosInstance from "../utils/axiosInstance";

const getEstateCategories = async (): Promise<ICategory[]> => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORIES_PATH, {
    params: {
      codes: CATEGORY_GROUP_ENUM.ESTATE,
    },
  });

  return response.data.data;
};

// eslint-disable-next-line import/prefer-default-export
export { getEstateCategories };
