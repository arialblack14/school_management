class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, 
         :trackable, :validatable

  ## Teachers to group association
  has_many :teacher_groups, through: :teacher_lessons, source: :lesson
  has_many :groups_teacher, through: :teacher_groups, source: :groups
  ## Teachers to lesson association
  has_many :teacher_lessons, foreign_key: :teacher_id
  has_many :lessons, through: :teacher_lessons

  ## Students to group/teacher/lesson association
  has_many :student_groups, through: :group_students, source: :group
  has_many :group_students, foreign_key: :student_id
  has_many :student_lessons, through: :student_groups, source: :lesson
  ## end of freaking associations :D

  ## mailboxer thing
  acts_as_messageable

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

  def mailboxer_email(object)
    return nil
  end
end
