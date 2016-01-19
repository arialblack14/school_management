class TeacherLessonDatesListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <li className="list-group-item">{this.props.lessonDate.date}</li>
      </div>
    )
  }
}