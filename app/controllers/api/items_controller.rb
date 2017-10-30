class Api::ItemsController < ApplicationController
  def percentages
    @brand_counts = Item
      .where(search_query: params["searchQuery"])
      .where(created_at: params["startDate"]..params["endDate"])
      .where(brand: params["selectedBrands"])
  end

  def searchqueries
    @search_queries = Item.group(:search_query).count
  end

  def brands
    @brands = Item.group(:brand).count
  end
end
