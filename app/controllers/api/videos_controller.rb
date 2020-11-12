class Api::VideosController < ApplicationController 
    def index 
        @videos = Video.all 
    end 
    
    def show 
        @video = Video.find(params[:id])
    end 

    def myList
        mylist = MyListVideo.new(
            user_id: current_user.id, 
            my_list_videos_id: params[:id]
            myList_type: 'Video'
        )
        if like.save!
            render Video.find(params[:id])
        else
            render json: mylist.errors.full_messages, status: 422
        end
    end
end 