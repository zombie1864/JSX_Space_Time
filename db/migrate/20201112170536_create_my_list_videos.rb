class CreateMyListVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :my_list_videos do |t|
      t.integer :user_id
      t.integer :video_id

      t.timestamps
    end
    add_index :my_list_videos, [:user_id, :video_id], unique: true 
  end
end
