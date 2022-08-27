export interface ContactInformationType {
  facebook: string;
  youtube: string;
  phoneNumber: string;
  contactAddress: string;
}

export interface ImageVariantDataType {
  [key: string]: string;
}

export interface ImageDataType {
  id: string;
  variants: string[];
}
