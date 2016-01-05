class TeacherDashboardController < ApplicationController
  def index
    @inbox = []
    @sentbox = []

    current_user.mailbox.inbox.map do |c|
      c.messages.map do |m|
        @inbox.push(m) if m.sender.id != current_user.id
      end
    end

    current_user.mailbox.sentbox.map do |c|
      c.messages.map do |m|
        @sentbox.push(m) if m.sender.id == current_user.id
      end
    end

    @inbox = @inbox.map {|m| MessageSerializer.new(m).as_json }
    @sentbox = @sentbox.map {|m| MessageSerializer.new(m).as_json }
    @conversations = current_user.mailbox.conversations.map { |c| ConversationSerializer.new(c) }.as_json
  end

  def reply_to_message
    body = conversation_params[:body]
    conversation = Mailboxer::Conversation.find(conversation_params[:conversation_id])
    current_user.reply_to_conversation(conversation, body);
    render json: conversation
  end

  def send_new_message
    body = conversation_params[:body]
    subject = conversation_params[:subject]
    sender_id = conversation_params[:sender_id]
    receiver_id = conversation_params[:receiver_id]

    sender = User.find(sender_id)
    receiver = User.find(receiver_id)

    sender.send_message(receiver, body, subject)
    render json: { its: "DONE!" }
  end

  def get_users
    users = User.all
    render json: users
  end

  def get_groups
    groups = Group.all
    render json: groups
  end

  def get_lessons
    lessons = Lesson.all
    render json: lessons
  end

  private
    def conversation_params
      params.require(:conversation).permit(:conversation_id, :body, :sender_id, :receiver_id, :subject)
    end

end
