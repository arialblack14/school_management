# Creates admin user
User.create(first_name: "Adam", last_name: "Nowak", 
            email: "admin@example.com", password: "password", 
            password_confirmation: "password", account_type: "admin")