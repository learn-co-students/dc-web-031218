class Api::V1::DinosaursController < ApplicationController
  def index
    render json: Dinosaur.all, status: 200
  end
end
