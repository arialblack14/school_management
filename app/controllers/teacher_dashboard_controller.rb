class TeacherDashboardController < ApplicationController
  def index
    @inbox = []
    @sentbox = []

    current_user.mailbox.inbox.map do |c|
      c.messages.map do |m|
        @inbox.push(m) if m.sender.id != current_user.id
      end
    end

    current_user.mailbox.inbox.map do |c|
      c.messages.map do |m|
        @sentbox.push(m) if m.sender.id == current_user.id
      end
    end

    @inbox = @inbox.map {|m| MessageSerializer.new(m).as_json }
    @sentbox = @sentbox.map {|m| MessageSerializer.new(m).as_json }
    @conversations = current_user.mailbox.conversations.map { |c| ConversationSerializer.new(c) }.as_json
  end

  def get_message
    body = conversation_params[:body]
    conversation = Mailboxer::Conversation.find(conversation_params[:conversation_id])
    current_user.reply_to_conversation(conversation, body);
    render json: conversation
  end

  private
    def conversation_params
      params.require(:conversation).permit(:conversation_id, :body)
    end

end
