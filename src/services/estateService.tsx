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

const getEstateById = async (id: number): Promise<IEstate> => {
  const response = await axiosInstance.get(ESTATE_API_PATH.ESTATE_PATH(id));

  return response.data.data;
};

const getRandomEstates = async (limit: number): Promise<IEstate[]> => {
  const response = await axiosInstance.get(ESTATE_API_PATH.RANDOM_ESTATES_PATH, {
    params: { limit },
  });

  return response.data.data;
};

const getRelativeEstates = async (estate: IEstate): Promise<IEstate[]> => {
  const response = await axiosInstance.get(ESTATE_API_PATH.ESTATES_PATH, {
    params: { limit: 6, districtCode: estate.district.code },
  });

  return response.data.data;
};

export { getEstateById, getEstates, getRandomEstates, getRelativeEstates };
