class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    def index
        users = User.all
        render json: users
    end

    def create #signup
        user = User.create(user_params)
        render json: user
    end

    def mygames 
        user = User.find(session[:user_id])
        userGames = user.games
        render json: userGames
      end

    def show
        user = User.find(session[:user_id])
        session[:user_id] = user.id
        render json: user 
    end


    private

    def user_params
        params.permit(:username, :age)
    end

end