# Admin account
User.create(first_name: "Adam", last_name: "Nowak", 
            email: "admin@example.com", password: "password", 
            password_confirmation: "password", account_type: "admin")
# Teacher account
User.create(first_name: "Jan", last_name: "Kowalski", 
            email: "teacher@example.com", password: "password", 
            password_confirmation: "password", account_type: "teacher")
#Student account
User.create(first_name: "Janusz", last_name: "Galla", 
            email: "student@example.com", password: "password", 
            password_confirmation: "password", account_type: "student")