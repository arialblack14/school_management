class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleActiveTab(activeTab) {
    this.setState({activeTab: activeTab});
  }
  render() {
    let teacherGroups = <TeacherGroups />
    let teacherLessons = <TeacherLessons />
    let teacherStudents = <TeacherStudents />
    let teacherEvents = <TeacherEvents />
    return (
      <div>
        <div className="row">
          <TeacherNav currentUser={this.props.currentUser} changeActiveTab={this.handleActiveTab}/>
        </div>
        <div className="row">
          <TeacherGroups />
          <TeacherMessageBox />
        </div>
      </div>
    );
  }
}

