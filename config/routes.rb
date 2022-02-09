Rails.application.routes.draw do
  
  resources :games
  resources :users

  post '/signup', to: "users#create"

  get "/me", to: "users#show"
  get "/mygames", to: "users#mygames"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"  
end


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
