class MyListVideo < ApplicationRecord
    validates :user_id, uniqueness: true 
    validates :video_id, uniqueness: true 
    belongs_to :my_list_videos, polymorphic: true 
    belongs_to :user 
end
