class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: "groups"};
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  changeActiveTab(activeTab) {
    let newState = activeTab.target.id;
    this.setState({activeTab: newState});
  }
  render() {
    let teacherGroups = <TeacherGroups />
    let teacherLessons = <TeacherLessons />
    let teacherStudents = <TeacherStudents />
    let teacherEvents = <TeacherEvents />
    return (
      <div>
        <div className="row">
          <TeacherNav currentUser={this.props.currentUser} handleActiveTab={this.changeActiveTab}/>
        </div>
        <div className="row">
          <TeacherGroups />
          <TeacherMessageBox />
        </div>
      </div>
    );
  }
}

