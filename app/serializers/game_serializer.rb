class GameSerializer < ActiveModel::GameSerializer
  attributes :id, :title, :year, :genre
  belongs_to :user
end