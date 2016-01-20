class TeacherDashboardController < ApplicationController
  def index
    @inbox = []
    @sentbox = []
    @groups = []
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
    
    current_user.lessons.map do |l|
      l.groups.map do |g|
        @groups.push(g)
      end
    end
    @groups = @groups.map { |g| GroupSerializer.new(g).as_json }
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

  def send_new_broadcast_message
    body = conversation_params[:body]
    subject = conversation_params[:subject]
    sender_id = conversation_params[:sender_id]
    sender = User.find(sender_id)

    groups_id = conversation_params[:receivers][:groups]
    lessons_id = conversation_params[:receivers][:lessons]
    receivers_id = conversation_params[:receivers][:users]

    groups = groups_id.map { |g| Group.find(g.to_i) } if !groups_id.nil?
    lessons = lessons_id.map { |l| Lesson.find(l.to_i) } if !lessons_id.nil?
    receivers = receivers_id.map { |r| User.find(r.to_i) } if !receivers_id.nil?

    all_receivers = []

    if !groups.nil?
      groups.each do |g|
        g.students.each do |s|
          all_receivers.push(s)
        end
        g.teachers.each do |t|
          all_receivers.push(t)
        end
      end
    end

    if !lessons.nil?
      lessons.each do |l|
        l.students.each do |s|
          all_receivers.push(s)
        end
        l.teachers.each do |t|
          all_receivers.push(t)
        end
      end
    end

    if !receivers.nil?
      receivers.each do |r|
        all_receivers.push(r)
      end
    end

    ## Creating conversation
    all_receivers.uniq!
    conversation = sender.send_message(all_receivers, body, subject).conversation

    render json: conversation
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