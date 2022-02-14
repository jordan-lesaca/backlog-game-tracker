class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :genre, :user_id
  belongs_to :user, serializer: UserSerializer
end