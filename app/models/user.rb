class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, 
         :trackable, :validatable
         
  ## Teachers to group association
  has_many :teacher_groups, through: :group_teachers, source: :group
  has_many :group_teachers, foreign_key: :teacher_id

  ## Teachers to lesson association
  has_many :teacher_lessons, through: :teacher_groups, source: :lessons

  ## Students to group/teacher/lesson association

  has_many :student_groups, through: :group_students, source: :group
  has_many :group_students, foreign_key: :student_id
  has_many :lessons, through: :student_groups
  ## end of freaking associations :D

  ## Validations
  validates :email, presence: true
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :account_type, presence: true, 
            format: {with: /admin|teacher|student/}
  def name
    "#{first_name} #{last_name}"
  end
end
