class HomeController < ApplicationController

  def index
    @placas = Placa.includes(:bairro).all
  end

end
