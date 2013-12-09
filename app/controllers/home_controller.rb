class HomeController < ApplicationController

  def index
    @placas_df = Placa.includes(:bairro).where('bairros.cidade' => 'DF')     
    @bairros_df = Bairro.includes(:placas).where('cidade' => 'DF')

    @placas_go = Placa.includes(:bairro).where('bairros.cidade' => 'GO')
    @bairros_go = Bairro.includes(:placas).where('cidade' => 'GO')
  end

end


