class UsersController < ApplicationController
    skip_before_action :authorize

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def mygames 
        user = User.find(session[:user_id])
        userGames = user.games
        render json: userGames
      end


    private

    def user_params
        params.permit(:gametag, :age)
    end




end