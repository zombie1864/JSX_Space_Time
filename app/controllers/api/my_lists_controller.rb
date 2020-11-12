class Api::MylistsController < ApplicationController
    def index
        @myList = Mylists.all 
    end    
end