class TeacherLesson < ActiveRecord::Migration
  def change
    create_table :teacher_lessons do |t|
      t.integer :teacher_id
      t.integer :lesson_id

      t.timestamps null: false
    end
  end
end
