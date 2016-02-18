class TeacherDashboardController < ApplicationController
  def index
    
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