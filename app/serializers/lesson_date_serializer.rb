class LessonDateSerializer < ActiveModel::Serializer
  attributes :id, :date

  def date
    object.date.strftime("%Y/%d/%m starting at: %I:%M")
  end
end
