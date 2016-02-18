class LessonSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :lesson_dates, :students
end
