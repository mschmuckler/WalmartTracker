require 'open-uri'
require 'JSON'

puts "Enter a search term:"
query = STDIN.gets.chomp
puts "Enter the number of queries to be made over time:"
query_count = STDIN.gets.chomp.to_i
puts "Enter the time between each query in minutes:"
interval_time = STDIN.gets.chomp.to_i

item_counter = 1
response = open("http://api.walmartlabs.com/v1/search?apiKey=knjkan27u9d85dnatvtf2ftw&responseGroup=full&query=cereal&numItems=25&start=#{item_counter}").read
JSON.parse(response)["items"].each do |item|
  puts item["brandName"]
end
