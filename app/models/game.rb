class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :year, presence: true
    validates :year, length: { is: 4, message: "Please enter valid year " }
    validates :year, numericality: { less_than: 2023}
    validates :genre, presence: true
end