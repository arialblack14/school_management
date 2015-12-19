class AddLessonIdToLessonDates < ActiveRecord::Migration
  def change
    add_column :lesson_dates, :lesson_id, :integer
  end
end
