class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # Rescue from receives a series of exception classes or class names, and a trailing :with option with the name of a method or a proc to be calleed to handle them. 
  # handlers that take one argument will be called with the exception so that the exeption can be inspected when dealing with it
  # handlers are inherited. They are searched from right to left, from bottom to top, and up the hierarchy. The handler of the first class for which exception.is_a holds true is the one invoked, if any
  # ActiveRecord::RecordInvalid. As with any active record validator method, when the fields don't match and the validation fails, an activerecord::recordinvalid exception will be raised. You can handle this exception using rescue or rescue from 

  before_action :authorize

  private 

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def authorize
    @current_user = User.find(session[:user_id])
    render json: { errors: "Not Authorized" }, 
    status: unauthorized unless @current_user
  end

end

# ! raises an exception. 
# Formatted the Error Response. 
# Can also return a different format by using full_messages method to output an array or pre-formatted error messages:
# render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
# The key on our JSON object is errors since we are returning a collection of error messages(either an object or an array). 
