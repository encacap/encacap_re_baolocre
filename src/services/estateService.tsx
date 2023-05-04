import { IBaseListQuery, IResponseWithMeta } from "@encacap-group/types/dist/base";
import { IEstate } from "@encacap-group/types/dist/re";
import { ESTATE_API_PATH } from "../constants/apis";
import axiosInstance from "../utils/axiosInstance";

const getEstates = async (query: IBaseListQuery): Promise<IResponseWithMeta<IEstate>> => {
  const response = await axiosInstance.get(ESTATE_API_PATH.ESTATES_PATH, {
    params: query,
  });

  return response.data;
};

// eslint-disable-next-line import/prefer-default-export
export { getEstates };
