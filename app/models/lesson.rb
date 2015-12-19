class Lesson < ActiveRecord::Base
  validates :name, presence: true
  has_many :group_lessons
  has_many :groups, through: :group_lessons
  has_many :teachers, through: :groups
  has_many :lesson_dates
end
