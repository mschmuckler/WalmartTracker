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
