import { ContactInformationType } from "../types/dataTypes";
import axiosInstance from "../utils/axiosInstance";

/**
 * Get general contact information.
 * @returns {Promise<ContactInformationType>}
 */
const getContactInformation = async (): Promise<ContactInformationType> => {
    const response = await axiosInstance.get("configs/contact");
    return response.data.data;
};

// eslint-disable-next-line import/prefer-default-export
export { getContactInformation };
