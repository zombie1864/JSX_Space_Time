@videos.each do |video| 
    json.set! video.id do 
        json.extract! video, :title, :runtime, :description, :video_url 
    end
end  
    