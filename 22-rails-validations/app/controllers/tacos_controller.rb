class TacosController < ApplicationController
  before_action :set_taco, only: [:show, :edit, :update, :destroy]

  def index
    @tacos = Taco.all
  end

  def show
  end

  def new
    @ingredients = Ingredient.all
    @taco = Taco.new
    @taco.ingredients.build
  end

  def create
    @taco = Taco.new(taco_params)

    byebug
    if @taco.valid?
      @taco.save
      redirect_to tacos_path
    else
      @ingredients = Ingredient.all
      render :new
    end
    # what about new ingredients?
  end

  def edit
    @ingredients = Ingredient.all
  end

  def update
    # update and validate taco
    # add and validate ingredients
    redirect_to taco_path(taco)
  end

  def destroy
    @taco.destroy
    redirect_to tacos_path
  end

  private
  def set_taco
    @taco = Taco.find(params[:id])
  end

  def taco_params
    params.require(:taco).permit(:name, ingredient_ids: [])
  end

  def ingredient_params
    # how are you getting your new ingredients
  end
end
