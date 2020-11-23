Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show] 
    resources :mylists, only: [:create, :show]
    resources :donations, only: [:create]
  end 
  root "static_pages#root"
end
# "the show api doesn't make sense because donations will not be taken from db. user will only be able to add donation to the db"
# use plurals session is the only exemption 
# resources not resource, videos not video 