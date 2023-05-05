import { BAOLOCRE_SITE_CONFIG_CODE_ENUM, IConfig } from "@encacap-group/types/dist/re";
import { CONFIG_API_PATH } from "../constants/apis";
import { ContactInformationType } from "../types/dataTypes";
import axiosInstance from "../utils/axiosInstance";

/**
 * Get general contact information
 * @returns {Promise<ContactInformationType>}
 */
const getContactInformation = async (): Promise<ContactInformationType> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.NAME,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.PHONE_NUMBER,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.ZALO,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.FACEBOOK,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.YOUTUBE,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.ADDRESS,
      ],
    },
  });

  return response.data.data.reduce((config: ContactInformationType, item: IConfig) => {
    // eslint-disable-next-line no-param-reassign
    config[item.code] = item.value;
    return config;
  }, {} as ContactInformationType);
};

/**
 * Get homepage slider images
 * @returns {Promise<string[]>} - Homepage slider images
 */
const getHomepageSliderImages = async (): Promise<string[]> => {
  const response = await axiosInstance.get(
    CONFIG_API_PATH.CONFIG_PATH(BAOLOCRE_SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGES)
  );
  return [] || response.data.data;
};

const getSiteName = async (): Promise<string> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIG_PATH(BAOLOCRE_SITE_CONFIG_CODE_ENUM.NAME));

  return response.data.data.value;
};

export { getContactInformation, getHomepageSliderImages, getSiteName };
