feature "Main page", js: true do
  scenario "visiting main page" do
    visit root_path
    expect(page).to have_content 'Welcome, please log in to continue.'
  end
end