formatted_search_queries = @search_queries.map do |el|
  el[0]
end

json.array! formatted_search_queries
