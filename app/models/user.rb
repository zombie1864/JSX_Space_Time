class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 
    after_initialize :ensure_session_token 
    attr_reader :password 

    has_many :assignments, 
    class_name: :MyListVideo, 
    foreign_key: :user_id 

    has_many :videos, 
    through: :assignments, 
    source: :video

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email) 
        return nil unless user && user.is_password?(password) 
        user 
    end 

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create( password ) 
    end 

    def reset_session_token! 
        self.session_token = self.class.generate_session_token 
        self.save! 
        self.session_token 
    end 

    def is_password?(plaintext_password) 
        BCrypt::Password.new(self.password_digest).is_password?(plaintext_password) 
    end 

    private 

    def ensure_session_token 
        self.session_token ||= self.class.generate_session_token 
    end 

    def self.generate_session_token 
        SecureRandom::urlsafe_base64 
    end 
end
