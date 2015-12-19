class CreateLessonDates < ActiveRecord::Migration
  def change
    create_table :lesson_dates do |t|
      t.datetime :date

      t.timestamps null: false
    end
  end
end
