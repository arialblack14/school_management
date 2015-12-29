class MessageSerializer < ActiveModel::Serializer
  has_one :sender, class_name: "User"
  has_one :subject
  has_many :receipts
  attributes :body, :created_at, :updated_at, :id, :conversation_id

  def subject
    object.conversation.subject
  end
end
