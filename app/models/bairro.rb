class Bairro < ActiveRecord::Base    
  # attr_accessible :cidade, :nome, :bairro_id

  has_many :placas, dependent: :delete_all, inverse_of: :bairro 
end
