export const maskMobile = (mobile) => {
  if (!mobile) return "";

  const visibleDigits = 2;
  const maskedLength = Math.max(mobile.length - visibleDigits, 0);
  const maskedPart = "*".repeat(maskedLength);
  const visiblePart = mobile.slice(-visibleDigits);

  return maskedPart + visiblePart;
};

export const maskEmail = (email) => {
  const [name, domain] = email?.split("@") || [];
  return name?.length > 3
    ? name.slice(0, 3) + "*".repeat(name.length - 3) + "@" + domain
    : "*".repeat(name?.length || 0) + "@" + (domain || "***.***");
};
