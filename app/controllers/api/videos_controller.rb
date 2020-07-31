class Api::VideosController < ApplicationController 
    def index 
        @videos = Video.all 
        # render :video_url
        # render 'api/video'
        # consider an index page?
    end 
    
    def show 
        # debugger
        @video = Video.find(params[:id])
        # backend routes 
        # render json: :video_url
        # render text: 'hello'
        # render :video_url
        # render 'api/video/show'
        # consider a show page?
    end 
end 