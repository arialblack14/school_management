class MessageSerializer < ActiveModel::Serializer
  has_one :sender, class_name: "User"
  attributes :body, :created_at, :updated_at
end
