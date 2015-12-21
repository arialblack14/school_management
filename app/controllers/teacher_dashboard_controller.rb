class TeacherDashboardController < ApplicationController
  def index
    all_conversations = current_user.mailbox.inbox
    @conversations = all_conversations.map { |c| ConversationSerializer.new(c) }.as_json
  end
end
