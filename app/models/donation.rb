class Donation < ApplicationRecord 
    validates :monthly_amount, :first_name, :last_name, :city, :state, :zip_code, :email, presence: true
    
    belongs_to :users, 
    foreign_key: :user_id, 
    class_name: "User"
end 