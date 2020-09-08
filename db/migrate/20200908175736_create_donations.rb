class CreateDonations < ActiveRecord::Migration[5.2]
  def change
    create_table :donations do |t|
      t.string :monthly_amount, null: false 
      t.string :first_name, null: false 
      t.string :last_name, null: false 
      t.string :city, null: false 
      t.string :state, null: false 
      t.string :zip_code, null: false 
      t.string :email, null: false 

      t.timestamps 
    end
    add_index :donations, :email, unique: true 
  end
end
