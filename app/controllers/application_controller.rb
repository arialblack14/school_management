class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  serialization_scope :view_context
  protect_from_forgery with: :exception
  def after_sign_in_path_for(resource)
    case current_user.account_type
    when "admin"
      rails_admin_path
    when "teacher"
      teacher_path
    when "student"
      student_path
    else
      root_path
    end
  end
end
