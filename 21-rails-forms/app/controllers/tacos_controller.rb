class TacosController < ApplicationController

  def index
    @tacos = Taco.all
  end

  def show
    @taco = Taco.find(params[:id])
  end

  def new
    @ingredients = Ingredient.all
    @taco = Taco.new
  end

  def create
    taco = Taco.create(taco_params)
    if ingredient_params[:name] != ''
      taco.ingredients << Ingredient.create(ingredient_params)
    end
    redirect_to tacos_path
  end

  def edit
    @taco = Taco.find(params[:id])
    @ingredients = Ingredient.all
  end

  def update
    taco = Taco.find(params[:id])
    taco.update(taco_params)
    if ingredient_params[:name] != ''
      taco.ingredients << Ingredient.create(ingredient_params)
    end
    redirect_to taco_path(taco)
  end

  private

  def taco_params
    params.require(:taco).permit(:name, ingredient_ids: [])
  end

  def ingredient_params
    params.require(:ingredient).permit(:name, :calories)
  end
end
