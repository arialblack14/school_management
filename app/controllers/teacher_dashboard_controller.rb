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

  def get_users
    users = User.all
    render json: users
  end

  def get_groups
    if params[:group_id].present?
      group = Group.find(params[:group_id])
      render json: group
    else
      groups = Group.all
      render json: groups
    end
  end

  def get_lessons
    lessons = Lesson.all
    render json: lessons
  end

  private
    def conversation_params
      params.require(:conversation).permit(:conversation_id, :body, :sender_id, :receiver_id, 
                                           :subject, receivers: [:groups => [], :lessons => [], :users => []])
    end

end