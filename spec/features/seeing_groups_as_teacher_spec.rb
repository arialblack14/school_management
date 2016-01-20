feature "Teacher logs in", js: true do
  scenario "and sees proper groups" do
    teacher = FactoryGirl.create(:teacher)
    group = FactoryGirl.create(:group, name: "1k412")
    group_lesson = FactoryGirl.create(:group_lesson)
    lesson = FactoryGirl.create(:lesson)
    FactoryGirl.create(:teacher_lesson, 
                       teacher_id: teacher.id, 
                       lesson_id: lesson.id)
    login_as teacher
    expect(page).to have_content group.name
  end
end