Rails.application.routes.draw do

  get 'student_dashboard/index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'teacher', to: 'teacher_dashboard#index'
  get 'student', to: 'student_dashboard#index'
  ## Teacher dashboard
  get 'get_users', to: 'teacher_dashboard#get_users'
  get 'get_teacher_groups', to: 'groups#get_teacher_groups'
  get 'get_lessons', to: 'lessons#get_lessons'
  ## End
  
  # Messages
  get 'get_inbox', to: 'messages#get_inbox'
  get 'get_sentbox', to: 'messages#get_sentbox'
  post 'send_message', to: 'messages#reply_to_message'
  post 'send_new_message', to: 'messages#send_new_message'
  post 'send_new_broadcast_message', to: 'messages#send_new_broadcast_message'
  
  # Devise
  devise_for :users
  devise_scope :user do
    root to: "devise/sessions#new"
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
