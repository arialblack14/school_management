class TeacherStudentsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible: false}
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTab == "studentList") {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }
  render() {
    let students = []
    if(this.props.students.length > 0) {
      this.props.students.map(function(element) {
        students.push(<TeacherStudentsListItem key={element.id} student={element} />)
      }, this)
    } else {
      students.push(<li className="list-group-item">No students.</li>)
    }
    return(
      <div className={this.state.visible ? "" : "hidden"}>
        <button className="btn btn-info">Add grades</button>
        <ul className="list-group">
          {students}
        </ul>
      </div>
    )
  }
}