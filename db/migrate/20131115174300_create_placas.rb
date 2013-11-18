class CreatePlacas < ActiveRecord::Migration
  def change
    create_table :placas do |t|
      t.string :codigo
      t.string :descricao
      t.timestamps
    end
  end
end
