class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      @errors = { username: ['Invalid username or password.'] }
      render './errors', status: 400
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render status: 404
    end
  end
end
