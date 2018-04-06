class TacosController < ApplicationController

  def index
    @tacos = Taco.all
  end

  def show
    @taco = Taco.find(params[:id])
  end
end
