class Api::DonationsController < ApplicationController
    def create 
        @donation = Donation.new(donation_params) 
        # debugger

        if @donation.save 
            render "api/donations/show"
        else 
             render json: @donation.errors.full_messages, status: 422
        end 
        # debugger
    end 

    private 
    def donation_params 
        params.require(:donation).permit(:monthly_amount, :first_name, :last_name, :city, :state, :zip_code, :email)
    end 
end