class Video < ApplicationRecord
    validates :title, :video_url, uniqueness: true 
    validates :title, :runtime, :description, :video_url, presence: true 
end
