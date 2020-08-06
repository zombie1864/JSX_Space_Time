class VideoUpdatesImgs < ActiveRecord::Migration[5.2]
  def change 
    add_column :videos, :image_url, :string
  end
end
