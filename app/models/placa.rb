class Placa < ActiveRecord::Base
  # attr_accessible :codigo, :descricao, :categoria, :bairro_id, :bairro
  belongs_to :bairro, inverse_of: :placas
end
