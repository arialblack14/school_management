class GroupTeacher < ActiveRecord::Base
  belongs_to :teacher, class_name: 'User'
  belongs_to :group
end
