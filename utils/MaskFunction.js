export const maskMobile = (mobile) => {
  return mobile?.length > 1
    ? mobile.slice(0, 3) + "*".repeat(mobile.length - 2)
    : "*".repeat(mobile?.length || 0);
};

export const maskEmail = (email) => {
  const [name, domain] = email?.split("@") || [];
  return name?.length > 3
    ? name.slice(0, 3) + "*".repeat(name.length - 3) + "@" + domain
    : "*".repeat(name?.length || 0) + "@" + (domain || "***.***");
};
