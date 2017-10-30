class Api::ItemsController < ApplicationController
  def searchqueries
    @search_queries = Item.group(:search_query).count
  end

  def brands
    @brands = Item.group(:brand).count
  end
end
