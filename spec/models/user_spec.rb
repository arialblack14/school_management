require 'rails_helper'

RSpec.describe User, type: :model do
  context "new user" do
    it "wont have admin account_type" do
      expect(User.new.account_type).not_to eq("admin")
    end
  end
end
