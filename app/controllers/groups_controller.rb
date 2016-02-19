class GroupsController < ApplicationController
  def get_teacher_groups
    if params[:group_id].present?
      group = Group.find(params[:group_id])
      render json: group
    else
      groups = current_user.groups_teacher
      render json: groups
    end
  end
end
