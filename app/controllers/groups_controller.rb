class GroupsController < ApplicationController
  def get_groups
    if params[:group_id].present?
      group = Group.find(params[:group_id])
      render json: group
    else
      groups = Group.all
      render json: groups
    end
  end
end
