class TacosController < ApplicationController

  def index
    @tacos = Taco.all
  end

  def show
    byebug
    @taco = Taco.find(params[:id])
  end

  def new
    @ingredients = Ingredient.all
  end

  def create
    Taco.create(
      name: params[:taco][:name],
      ingredient_ids: params[:taco][:ingredient_ids]
    )
    redirect_to tacos_path
  end
end
