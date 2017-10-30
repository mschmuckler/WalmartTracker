class Api::ItemsController < ApplicationController
  def searchqueries
    @search_queries = Item.group(:search_query).count
  end
end
