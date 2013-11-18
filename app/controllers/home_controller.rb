class HomeController < ApplicationController

  def index
    @placas_df = Placa.joins(:bairro).where('bairros.cidade' => 'DF')
    @placas_go = Placa.joins(:bairro).where('bairros.cidade' => 'GO')
  end

end
