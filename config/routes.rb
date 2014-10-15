TwitterReader::Application.routes.draw do
  
  root :to => 'users#homepage'
  
  get "users" => 'users#index', :as => "users"
  get "users/new" => 'users#new', :as => "new_user"
  post "users" => 'users#create'

  match '/auth/:provider/callback', to: 'sessions#create'
  match 'signout', to: 'sessions#destroy', :as => "signout"
  
end
