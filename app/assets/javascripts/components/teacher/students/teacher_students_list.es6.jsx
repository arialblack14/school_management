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
    return(
      <div className={this.state.visible ? "" : "hidden"}>
        <ul className="list-group">
          <TeacherStudentsListItem />
        </ul>
      </div>
    )
  }
}