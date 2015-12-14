class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, 
         :trackable, :validatable
  validates :email, presence: true
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :account_type, presence: true, 
            format: {with: /admin|teacher|student/}
  def full_name
    "#{first_name} #{last_name}"
  end
end
