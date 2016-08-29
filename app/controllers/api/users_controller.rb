class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      @errors = @user.errors
      render './errors', status: 400
    end
  end
end
