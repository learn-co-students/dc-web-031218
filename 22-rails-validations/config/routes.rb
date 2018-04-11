Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# resources :tacos, only: [:index, :show, :new, :create]

resources :tacos

# get '/tacos' => "tacos#index"

end
