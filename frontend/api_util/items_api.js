export const fetchSearchQueries = () => {
  return $.ajax({
    method: "GET",
    url: "/api/itemsearchqueries",
  });
};
