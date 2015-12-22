class MessageSerializer < ActiveModel::Serializer
  has_one :sender, class_name: "User"
  has_many :receipts
  has_many :receivers, through: :receipts, class_name: "User"
  attributes :body, :created_at, :updated_at

  def receivers
    receipts.map do |r|
      r.receiver if r.mailbox_type == "inbox"
    end
  end

end
