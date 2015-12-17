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
    let activeTab;
    switch(this.state.activeTab) {
      case 'groups':
        activeTab = <TeacherGroupList currentUser={this.props.currentUser} groups={this.props.groups}/>;
        break;
      case 'lessons':
        activeTab = <TeacherLessons />;
        break;
      case 'students':
        activeTab = <TeacherStudents />;
        break;
      case 'events':
        activeTab = <TeacherEvents />;
        break;
    };
    return (
      <div>
        <div className="row">
          <TeacherNav currentUser={this.props.currentUser} 
          handleActiveTab={this.changeActiveTab} activeTab={this.state.activeTab}/>
        </div>
        <div className="row">
          {activeTab}
          <TeacherMessageBox />
        </div>
      </div>
    );
  }
}

