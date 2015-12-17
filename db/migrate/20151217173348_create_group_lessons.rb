class CreateGroupLessons < ActiveRecord::Migration
  def change
    create_table :group_lessons do |t|

      t.timestamps null: false
    end
  end
end
