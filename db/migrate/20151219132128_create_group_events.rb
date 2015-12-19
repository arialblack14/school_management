class CreateGroupEvents < ActiveRecord::Migration
  def change
    create_table :group_events do |t|
      t.integer :group_id
      t.integer :event_id

      t.timestamps null: false
    end
  end
end
