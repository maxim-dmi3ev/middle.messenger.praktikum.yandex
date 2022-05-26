export function queryStringify(data: Record<string, any>) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (acc !== "?") {
      acc += "&";
    }
    acc += `${key}=${value}`;
    return acc;
  }, "?");
}
