class UsersController < ApplicationController
  before_action :current_user, only: [:show]
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  def show; end

  private

  def current_user
    @user = User.find(params[:id])
  end
end
