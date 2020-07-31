class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
        t.string :title, null: false 
        t.integer :runtime, null: false 
        t.text :description, null: false 
        t.string :video_url, null: false 
      t.timestamps
    end
    add_index :videos, :title, unique: true 
    add_index :videos, :video_url, unique: true 
  end
end
