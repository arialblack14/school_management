class Group < ActiveRecord::Base
  has_many :group_teachers
  has_many :teachers, through: :group_teachers, class_name: 'User'
end
