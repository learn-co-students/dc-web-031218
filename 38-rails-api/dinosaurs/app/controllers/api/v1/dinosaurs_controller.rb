class Api::V1::DinosaursController < ApplicationController
  def index
    @dinosaurs = Dinosaur.all
    render json: Dinosaur.all, status: 200
  end
end
