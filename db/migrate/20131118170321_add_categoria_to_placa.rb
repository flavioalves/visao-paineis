class AddCategoriaToPlaca < ActiveRecord::Migration
  def change
    add_column :placas, :categoria, :string
  end
end
