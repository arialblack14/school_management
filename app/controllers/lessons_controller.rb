class LessonsController < ApplicationController
  def get_lessons
    lessons = current_user.lessons.includes(:groups)
    render json: lessons
  end
end
