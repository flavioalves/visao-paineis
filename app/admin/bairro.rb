# -*- coding: utf-8 -*-
ActiveAdmin.register Bairro do
  menu parent: I18n.t('app.active_admin.content'), priority: 1

  config.per_page = 30  
  filter :cidade, as: :select, collection: ["DF", "GO"]

  index do
    column :id
    column :nome
    column :cidade
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :nome
      f.input :cidade, as: :select, collection: ["DF", "GO"]
    end

    f.actions
  end

  show nome: :nome do |page|
    attributes_table do
      row :nome
      row :cidade
    end

    active_admin_comments
  end
  
end
