class CreateChangesToMyListVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :changes_to_my_list_videos do |t|
      add_column :my_list_videos, :myList_type, :string
      add_column :my_list_videos, :my_list_videos_id, :bigint 
      t.timestamps
    end
  end
end
