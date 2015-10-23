feature "Main page", js: true do
  scenario "visiting main page" do
    visit root_path
    expect(page).to have_content 'Log in'
  end
end