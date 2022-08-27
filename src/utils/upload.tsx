import { ImageDataType, ImageVariantDataType } from "../types/dataTypes";

const getVariantObjectFromImage = (image: ImageDataType) => {
  const { variants } = image;
  const results: ImageVariantDataType = {};
  variants.forEach((variant) => {
    const variantName = variant.split("/").pop();
    if (!variantName) {
      return;
    }
    results[String(variantName)] = variant;
  });
  return results;
};

const getImageURLFromImage = (image: ImageDataType, variantName: string) => {
  const variantObject = getVariantObjectFromImage(image);
  return variantObject[String(variantName)] || variantObject.public || Object.values(variantObject)[0];
};

// eslint-disable-next-line import/prefer-default-export
export { getImageURLFromImage };
