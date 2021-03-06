export const fetchSearchQueries = () => {
  return $.ajax({
    method: "GET",
    url: "/api/itemsearchqueries",
  });
};

export const fetchBrands = () => {
  return $.ajax({
    method: "GET",
    url: "/api/itembrands",
  });
};

export const fetchItemPercentages = (data) => {
  return $.ajax({
    method: "GET",
    url: "/api/itempercentages",
    data,
  });
};

export const fetchItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/items",
  });
};

export const updateBrand = (data) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/items/${data.id}`,
    data,
  });
};
