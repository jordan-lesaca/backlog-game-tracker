class User < ApplicationRecord
    has_secure_password #bcrypt gem. hash and salts passwords. 
    #provides provides two new instance methods password and password_confirmation. Must have a password_digest column. 
    #calls ActiveRecord helper method [validates_confirmation_of]. When the fields don't match, an ActiveRecord::RecordInvalid exception will be raised. 
    #Can handle this exception by using rescue or rescue_from. 

    has_many :games

    validates :username, presence: true
    validates :username, uniqueness: true
end
