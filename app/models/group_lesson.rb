class GroupLesson < ActiveRecord::Base
  belongs_to :lesson
  belongs_to :group
end
