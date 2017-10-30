formatted_brands = @brands.map do |el|
  el[0]
end

json.array! formatted_brands
