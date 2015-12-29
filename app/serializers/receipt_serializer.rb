class ReceiptSerializer < ActiveModel::Serializer
  has_one :receiver, class_name: "User"
  attributes :mailbox_type
end
