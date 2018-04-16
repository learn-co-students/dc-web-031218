class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :require_login, only: [:missile_codes, :diary]
  before_action :require_missile_code_access, only: [:missile_codes]

  def signin
    @user = User.find_by(
      username: params[:username])
      .try(:authenticate, params[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to '/diary'
    end
  end

  def diary
  end

  def missile_codes
  end

  def logout
    # destroy the session
    session[:user_id] = nil
    redirect_to '/signin'
  end

  private
  def require_login
    @user = User.find_by(id: session[:user_id])
    if !@user
      head :unauthorized
    end
  end

  def require_missile_code_access
    require_login
    if !@user.username == 'rob'
      head :unauthorized
    end
  end
end
