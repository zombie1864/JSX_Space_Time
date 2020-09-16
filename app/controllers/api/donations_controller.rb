class Api::DonationsController < ApplicationController
    def create 
        @donation = Donation.new(donation_params) 
        if @donation.save 
            render :show
        else 
            render :errors, status: 404
        end 
    end 

    private 
    def donation_params 
        params.require(:donation).permit(:monthly_amount, :first_name, :last_name, :city, :state, :zip_code, :email)
    end 
end