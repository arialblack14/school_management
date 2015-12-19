class TeacherDashboardController < ApplicationController
  def index
    @recent_messages = current_user.mailbox.inbox.take(5)
    @serialized_messages = {}
    iterator = 0
    @recent_messages.map do |m|
      @serialized_messages.merge!("#{iterator}": {subject: m.subject, 
        message: m.last_message.body, author: m.last_message.sender.name})
      iterator += 1
    end
  end
end
