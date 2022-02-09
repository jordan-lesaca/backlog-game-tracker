class UserSerializer < ActiveModel::UserSerializer 
  attributes :id, :username, :age
end