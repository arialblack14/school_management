class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: "groups", groups: [], lessons: [], inbox: [], sentbox: [], conversations: []};
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.getLessons = this.getLessons.bind(this);
    this.extractGroups = this.extractGroups.bind(this);
  }
  changeActiveTab(activeTab) {
    let newState = activeTab.target.id;
    this.setState({activeTab: newState});
  }
  getLessons() {
    $.get('/get_lessons')
      .done(function(result) {
        this.setState({groups: this.extractGroups(result.lessons)})
      }.bind(this));
  }
  componentDidMount() {
    this.getLessons();
  }
  extractGroups(lessons) {
    let groups = [];
    lessons.map(function(element) {
      element.groups.map(function(element){
        groups.push(element);
      });
    });
    return groups;
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
      secondTab = <TeacherMessageBox currentUserId={this.props.currentUserId} inbox={this.state.inbox}/>;
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

