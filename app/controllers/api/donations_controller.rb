class Api::DonationsConrtoller < ApplicationController
    def create 
        @donation = Donation.new(donation_params) 
        if @donation.save 
            render :show 
        else 
            render text :'Something went wrong, sorry!', status: 422
        end 
    end 

    # def show 
    #     render :show 
    # end 
end