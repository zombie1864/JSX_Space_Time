json.extract! video, :id, :title, :runtime, :description, :video_url, :image_url

if current_user.present?
    json.added_by_current_user !!video.myLists.find_by(user_id: current_user.id)
end 

