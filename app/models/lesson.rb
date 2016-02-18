class Lesson < ActiveRecord::Base
  validates :name, presence: true
  has_many :group_lessons
  has_many :groups, through: :group_lessons
  has_many :teacher_lessons
  has_many :teachers, through: :teacher_lessons
  has_many :students, through: :groups
  has_many :lesson_dates

  def teacher_ids
    teachers.pluck(:id)
  end
end
