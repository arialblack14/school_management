feature "Login", js: true do
  student = FactoryGirl.create(:student)
  scenario "as admin redirects to admin panel" do
    admin = FactoryGirl.create(:admin)
    visit root_path
    within("#new_user") do
      fill_in 'user_email', :with => admin.email
      fill_in 'user_password', :with => admin.password
      click_button 'Sign in'
    end
    expect(page).to have_content "Site Administration"
  end

  scenario "as teacher redirects to teacher panel" do
    teacher = FactoryGirl.create(:teacher)
    visit root_path
    within("#new_user") do
      fill_in 'user_email', :with => teacher.email
      fill_in 'user_password', :with => teacher.password
      click_button 'Sign in'
    end
    expect(page).to have_content "Groups Lessons Students Events Messages"
  end


end