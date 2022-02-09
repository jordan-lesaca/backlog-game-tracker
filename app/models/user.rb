class User < ApplicationRecord
    has_many :games

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 6}
    validates :age, presence: true 
end
