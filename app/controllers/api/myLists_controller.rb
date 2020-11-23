class Api::MyListsController < ApplicationController
    def create
        MyListVideo.create(myList_params)
        @user = User.find(params[:myListData][:user_id])
        render :show 
    end

    def show
        @user = User.find(params[:id])
    end

    private 

    def myList_params
        params.require(:myListData).permit(:user_id, :video_id)
    end
end