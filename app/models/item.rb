class Item < ApplicationRecord
  validates :name, :brand, :image, :url, :category, :search_query, presence: true
end
