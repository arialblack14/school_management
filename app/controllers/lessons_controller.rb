class LessonsController < ApplicationController
  def get_lessons
    render json: current_user.lessons
  end
end
