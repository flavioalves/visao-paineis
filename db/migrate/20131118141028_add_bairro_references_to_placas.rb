class AddBairroReferencesToPlacas < ActiveRecord::Migration
  def change
    add_column :placas, :bairro_id, :integer, references: :bairros
    #add_reference :placas, :bairros, index: true
  end
end
