class MyListVideo < ApplicationRecord
    validates :user_id, uniqueness: true 
    validates :video_id, uniqueness: true 
    belongs_to :user 
end
