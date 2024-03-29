const friendlyPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return "";
  }
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const match = cleanedPhoneNumber.match(/^(\d{4})(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return phoneNumber;
};

// eslint-disable-next-line import/prefer-default-export
export { friendlyPhoneNumber };
