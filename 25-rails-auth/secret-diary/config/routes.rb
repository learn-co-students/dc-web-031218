Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/signin', to: 'application#signin'
  post '/signin', to: 'application#signin'
  get '/diary', to: 'application#diary'
end
