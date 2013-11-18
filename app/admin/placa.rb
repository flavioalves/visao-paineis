# -*- coding: utf-8 -*-
ActiveAdmin.register Placa do
  menu parent: I18n.t('app.active_admin.content'), priority: 1

  filter :bairro, as: :select, collection: Bairro.all.map{|u| ["#{u.nome}", u.id]}      
  filter :categoria, as: :select, collection: ["Outdoor", "Front-light", "Triedro"]  

  config.per_page = 20

  index do
    column :id
    column :codigo
    column :descricao
    column :categoria
    column "Bairro" do |placa|
      placa.bairro.nome
    end
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :codigo
      f.input :descricao   
      f.input :categoria, as: :select, collection: ["Outdoor", "Front-light", "Triedro"]      
      f.input :bairro_id, :as => :select, :collection => Bairro.all.map{|u| ["#{u.nome}", u.id]}      
    end

    f.actions
  end

  show codigo: :codigo do |placa|
    attributes_table do
      row :codigo
      row :descricao
      row :categoria
      row :bairro do 
        placa.bairro.nome
      end
    end

    active_admin_comments
  end
  
  controller do
    def scoped_collection
      Placa.includes(:bairro)
    end
  end

end
