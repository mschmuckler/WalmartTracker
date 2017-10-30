Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :items, only: [:index, :update]
    get "/itemsearchqueries", to: "items#searchqueries"
    get "/itempercentages", to: "items#percentages"
  end
end
