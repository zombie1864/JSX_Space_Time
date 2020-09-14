class Api::DonationsController < ApplicationController
    def create 
        @donation = Donation.new(donation_params) 
        if @donation.save 
            # render :show 
            render plain: 'You Win'# GIVE THIS A TRY
        else 
            render text: 'Something went wrong, sorry!'
        end 
    end 

    # def show 
    #     render :show 
    # end 
end