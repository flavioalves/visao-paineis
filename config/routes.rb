require 'resque/server'

VisaoPaineis::Application.routes.draw do
  mount Mercury::Engine => '/'
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :admin_users, ActiveAdmin::Devise.config

  authenticate :admin_user do
    mount Resque::Server, :at => '/workers'
  end

  devise_for :users, sign_out_via: :get, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_scope :user do
    get '/users/connect/:network', to: redirect("/users/auth/%{network}"),
                                   as: 'user_omniauth_connect'
  end

  get '/usuarios/minha-conta' => 'settings#edit', as: :edit_user
  put '/usuarios' => 'settings#update', as: :update_user

  root  to:                     'home#index'
  get   'contato'            => 'contacts#index', as: :contacts
  match 'contato/enviar'     => 'contacts#new',   as: :new_contact, :via => [:get, :post]
  put   'mercury_content'    => 'mercury_contents#update'
  get   'frontend/:template' => 'frontend#show'
  get   'frontend'           => 'frontend#index'

  ActiveAdmin.routes(self) rescue ActiveAdmin::DatabaseHitDuringLoad
  get ':slug'                => 'pages#show',     as: :page
end
