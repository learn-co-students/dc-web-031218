class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def signin
    @user = User.find_by(
      username: params[:username])
        .authenticate(params[:password])
      )
    if @user
      redirect_to '/diary'
    end
  end

  def diary
  end
end
