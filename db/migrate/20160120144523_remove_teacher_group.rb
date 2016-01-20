class RemoveTeacherGroup < ActiveRecord::Migration
  def change
    drop_table :group_teachers
  end
end
