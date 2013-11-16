class CreateBairros < ActiveRecord::Migration
  def change
    create_table :bairros do |t|
      t.string :nome
      t.string :cidade
      t.belongs_to :placa
      t.timestamps
    end
  end
end
