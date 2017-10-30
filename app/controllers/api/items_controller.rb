class Api::ItemsController < ApplicationController
  def percentages
    @brand_counts = Item
      .where(search_query: params["searchQuery"])
      .where(created_at: params["startDate"]..params["endDate"])
      .where(brand: params["selectedBrands"])
      .group(:brand)
      .count
    @total_count = Item
      .where(search_query: params["searchQuery"])
      .where(created_at: params["startDate"]..params["endDate"])
      .count
  end

  def searchqueries
    @search_queries = Item.group(:search_query).count
  end

  def brands
    @brands = Item.group(:brand).count
  end
end
