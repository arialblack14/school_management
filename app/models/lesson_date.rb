class LessonDate < ActiveRecord::Base
  belongs_to :lesson
  validates :date, presence: true
  validates :lesson, presence: true
end
