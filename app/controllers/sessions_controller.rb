class SessionsController < ApplicationController
    before_action :authorize, only: [:destroy]

    def create #login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy #logout
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: { errors: ["You must be logged in to access this content"]}, status: :unauthorized
        end
    end

    private

  def authorize
    @current_user = User.find(session[:user_id])
    render json: { errors: "Not Authorized" }, 
    status: unauthorized unless @current_user
  end

end