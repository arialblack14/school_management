class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: "groups", groups: [], inbox: [], sentbox: [], conversations: []};
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
  changeActiveTab(activeTab) {
    let newState = activeTab.target.id;
    this.setState({activeTab: newState});
  }
  getGroups() {
    $.get('/get_teacher_groups')
      .done(function(result) {
        this.setState({groups: result.groups})
      }.bind(this));
  }
  componentDidMount() {
    this.getGroups();
    this.getMessages();
  }
  getMessages() {
    $.get('/get_inbox')
      .done(function(result) {
        this.setState({inbox: result.messages})
      }.bind(this));
  }
  render() {
    let activeTab, secondTab;
    switch(this.state.activeTab) {
      case 'groups':
        activeTab = <TeacherGroupsList currentUser={this.props.currentUser} groups={this.state.groups}/>;
        break;
      case 'lessons':
        //to be dumped
        activeTab = <TeacherLessonsList currentUser={this.props.currentUser} lessons={this.state.lessons}/>;
        break;
      case 'students':
        activeTab = <TeacherStudents />;
        break;
      case 'events':
        activeTab = <TeacherEvents />;
        break;
      case 'messages':
        activeTab = <TeacherMessages currentUserId={this.props.currentUserId} inbox={this.state.inbox} sentbox={this.state.sentbox} conversations={this.state.conversations}/>;
        break;
    };
    if(this.state.activeTab !== 'messages') {
      secondTab = <TeacherMessageBox currentUserId={this.props.currentUserId} inbox={this.state.inbox} getMessages={this.getMessages}/>;
    } else {
      secondTab = "";
    };
    return (
      <div>
        <div className="row">
          <TeacherNav currentUser={this.props.currentUser} 
          handleActiveTab={this.changeActiveTab} activeTab={this.state.activeTab}/>
        </div>
        <div className="row">
          {activeTab}
          {secondTab}
        </div>
      </div>
    );
  }
}

