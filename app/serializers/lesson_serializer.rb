class LessonSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :students, :lesson_dates, :teachers
end
