class Api::ItemsController < ApplicationController
  def index
    @items = Item.select("distinct on (name) *")
  end

  def update
    selected_item = Item.find(params[:id])
    @all_items_with_same_name = Item.where(name: selected_item.name)
    @all_items_with_same_name.each do |item|
      Item.update(item.id, brand: params[:brand])
    end
    render json: "Brand update persisted to database!"
  end

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
