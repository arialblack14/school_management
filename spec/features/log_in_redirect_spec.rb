feature "Login", js: true do
  student = FactoryGirl.create(:student)
  scenario "as admin redirects to admin panel" do
    admin = FactoryGirl.create(:admin)
    login_as admin
    expect(page).to have_content "Site Administration"
  end

  scenario "as teacher redirects to teacher panel" do
    teacher = FactoryGirl.create(:teacher)
    login_as teacher
    expect(page).to have_content "Groups Lessons Students Events Messages"
  end
end