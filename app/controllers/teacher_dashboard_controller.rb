class TeacherDashboardController < ApplicationController
  def index
    inbox = current_user.mailbox.inbox
    sentbox = current_user.mailbox.sentbox
    @inbox = inbox.map { |c| ConversationSerializer.new(c) }.as_json
    @sentbox = sentbox.map { |c| ConversationSerializer.new(c) }.as_json
  end
end
