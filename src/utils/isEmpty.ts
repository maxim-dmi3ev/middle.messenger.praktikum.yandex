export const isEmpty = (value: any) => {
  if (Array.isArray(value) || typeof value === "string") {
    return value.length === 0;
  }

  if (value?.size !== undefined) {
    return value.size === 0;
  }

  if (value && typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return true;
};
