Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/signin', to: 'application#signin'
  post '/signin', to: 'application#signin'
  get '/diary', to: 'application#diary'
  get '/logout', to: 'application#logout'
  get '/missile_codes', to: 'application#missile_codes'
end
