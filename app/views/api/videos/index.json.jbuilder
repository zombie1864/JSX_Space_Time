@videos.each do |video| 
    json.set! video.id do 
        json.partial! 'api/videos/video', video: video
        json.image_url asset_path("#{video.image_url}") 
    end
end  
    