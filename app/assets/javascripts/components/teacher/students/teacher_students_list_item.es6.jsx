class TeacherStudentsListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <li className="list-group-item">{this.props.student.name}</li>
      </div>
    )
  }
}