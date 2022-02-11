class GamesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
      games = Game.all.order(:title)
      render json: games
    end

    def create 
        game = Game.create(game_params)
        render json: game
    end
  
    def update
        game = Game.find(params[:id])
        game.update(game_params)
        render json: game
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end

    def show
        game = Game.find(params[:id])
        render json: game
    end

    private

    def game_params
        params.require(:game).permit(:title, :year, :genre, :user_id)
    end

  end