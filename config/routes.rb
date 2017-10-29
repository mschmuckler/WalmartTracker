Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :items, only: [:index, :update]
    get "/itemspercentage", to: "items#percentage"
  end
end
