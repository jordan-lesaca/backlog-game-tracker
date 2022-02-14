class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        users = User.all
        render json: users
    end

    def create #signup
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def mygames 
        user = User.find(session[:user_id])
        userGames = user.games
        session[:user_id] = user.id    
        render json: userGames
    end

    def show
        user = User.find(session[:user_id])
        session[:user_id] = user.id
        render json: user 
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end