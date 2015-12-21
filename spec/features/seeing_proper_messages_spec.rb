feature "Teacher sees messages", js: true do 
  scenario "sent by another user" do
    teacher = FactoryGirl.create(:teacher)
    admin = FactoryGirl.create(:admin)
    admin.send_message(teacher, "Hey #{teacher.name}, how ya doin?", "Hello")
    login_as teacher
    expect(page).to have_content 'how ya doin?'
  end
end