export const cropText = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return str.split("").slice(0, maxLength).concat("...").join("");
  }
  return str;
};
