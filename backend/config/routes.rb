Rails.application.routes.draw do
  resources :projects, only: [:index]

  resources :posts, only: [:index, :create], param: :slug
  get "posts/:slug", to: "posts#show", as: :post
end
