class Api::DonationsController < ApplicationController
    def create 
        @donation = Donation.new(donation_params) 
        if @donation.save 
            render :show 
            # render plain: 'You Win'# GIVE THIS A TRY
        else 
            render text: 'Something went wrong, sorry!'
        end 
    end 

    # def show 
    #     render :show 
    # end 

    private 
    def donation_params 
        params.require(:donation).permit(:monthly_amount, :first_name, :last_name, :city, :state, :zip_code, :email)
end