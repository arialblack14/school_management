class ConversationSerializer < ActiveModel::Serializer
  has_many :messages
  attributes :id, :subject, :created_at, :updated_at
end
