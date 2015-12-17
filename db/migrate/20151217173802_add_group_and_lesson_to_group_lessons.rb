class AddGroupAndLessonToGroupLessons < ActiveRecord::Migration
  def change
    add_column :group_lessons, :group_id, :integer
    add_column :group_lessons, :lesson_id, :integer
  end
end
