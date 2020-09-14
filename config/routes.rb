Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
    resource :donation, only: [:create, :show]
  end 
  root "static_pages#root"
end

# use plurals session is the only exemption 
# resources not resource, videos not video 