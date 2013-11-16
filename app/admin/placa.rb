# -*- coding: utf-8 -*-
ActiveAdmin.register Placa do
  menu parent: I18n.t('app.active_admin.content'), priority: 1

  filter :bairro, as: :select, collection: Bairro.all.map{|u| ["#{u.nome}", u.id]}      

  config.per_page = 20

  index do
    column :id
    column :codigo
    column :descricao
    column "Bairro" do |placa|
      placa.bairro.nome
    end
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :codigo
      f.input :descricao      
      f.input :bairro_id, :as => :select, :collection => Bairro.all.map{|u| ["#{u.nome}", u.id]}      
    end

    f.actions
  end

  show codigo: :codigo do |page|
    attributes_table do
      row :codigo
      row :descricao
      row :bairro
    end

    active_admin_comments
  end
  
  controller do
    def scoped_collection
      Placa.includes(:bairro)
    end
  end

end
