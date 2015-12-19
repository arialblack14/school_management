class TeacherLessonListItem extends React.Component {
  render() {
    return (
      <div>
        <li className="list-group-item highlight-hover" 
            key={this.props.lesson.id}>
            <b>{this.props.lesson.name}</b>
        </li>
      </div>
    )
  }
}