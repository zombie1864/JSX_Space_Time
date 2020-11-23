class Video < ApplicationRecord
    validates :title, :video_url, uniqueness: true 
    validates :title, :runtime, :description, :video_url, presence: true 

    has_many :list_assignments, 
    class_name: :MyListVideo, 
    foreign_key: :video_id
end
