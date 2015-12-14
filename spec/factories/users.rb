FactoryGirl.define do
  factory :admin, class: User do
    first_name "Adam"
    last_name "Nowak"
    email "admin@example.com"
    password "password"
    account_type "admin"
  end
  
  factory :teacher, class: User do
    first_name "Jan"
    last_name "Kowalski"
    email "teacher@example.com"
    password "password"
    account_type "teacher"
  end

  factory :student, class: User do
    first_name "Janusz"
    last_name "Gall"
    email "student@example.com"
    password "password"
    account_type "student"
  end
end