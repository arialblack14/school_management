feature "Teacher logs in", js: true do
  scenario "and sees proper groups" do
    teacher = FactoryGirl.create(:teacher)
    group = FactoryGirl.create(:group, name: "1k412")
    FactoryGirl.create(:group_teacher, 
                       teacher_id: teacher.id, 
                       group_id: group.id)
    login_as teacher
    expect(page).to have_content group.name
  end
end