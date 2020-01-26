export const sortObject = (order, key, data) => {
  data.sort((a, b) => {
    let x = typeof a[key] === "number" ? a[key] : a[key].toUpperCase();
    let y = typeof b[key] === "number" ? b[key] : b[key].toUpperCase();
    if (order === "DSC") {
      return x < y ? 1 : -1;
    } else {
      return x > y ? 1 : -1;
    }
  });
  return data;
};
