@user.assignments.each do | assignment |
    json.set! assignment.id do 
        json.extract! assignment.video, :id, :title, :runtime, :description, :video_url, :image_url
    end 
end 