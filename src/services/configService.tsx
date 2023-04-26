import { ContactInformationType } from "../types/dataTypes";
import axiosInstance from "../utils/axiosInstance";

/**
 * Get general contact information
 * @returns {Promise<ContactInformationType>}
 */
const getContactInformation = async (): Promise<ContactInformationType> => {
  const response = await axiosInstance.get("configs/contact");
  return response.data.data;
};

/**
 * Get homepage slider images
 * @returns {Promise<string[]>} - Homepage slider images
 */
const getHomepageSliderImages = async (): Promise<string[]> => {
  const response = await axiosInstance.get("configs/homepage-slider");
  return response.data.data;
};

export { getContactInformation, getHomepageSliderImages };
