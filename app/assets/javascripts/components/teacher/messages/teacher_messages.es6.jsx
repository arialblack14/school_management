class TeacherMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 'inbox'};
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  changeActiveTab(activeTab) {
    let newState = activeTab.currentTarget.id;
    this.setState({activeTab: newState});
  }
  componentDidMount() {
    $.get("/get_users").done(function(data) {
      this.setState({users: data.teacher_dashboard});
    }.bind(this));
  }
  render() {
    let activeTab;
    switch(this.state.activeTab) {
      case 'inbox':
        activeTab = <TeacherInbox inbox={this.props.inbox}/>;
        break;
      case 'sentbox':
        activeTab = <TeacherSentbox sentbox={this.props.sentbox}/>;
        break;
      case 'new-message':
        activeTab = <TeacherNewMessage currentUserId={this.props.currentUserId}users={this.state.users}/>
        break;
    };
    return (
      <div className="col-md-7 pull-left">
        <ul className="nav nav-tabs">
          <li id="inbox"
          className={this.state.activeTab == "inbox" ? "active nav-links" : "nav-links"} 
          onClick={this.changeActiveTab}><a>Inbox</a></li>
          <li id="sentbox"
          className={this.state.activeTab == "sentbox" ? "active nav-links" : "nav-links"} 
          onClick={this.changeActiveTab}><a>Sentbox</a></li>
          <li id="new-message"
          className={this.state.activeTab == "new-message" ? "active nav-links" : "nav-links"} 
          onClick={this.changeActiveTab}><a>Compose new message</a></li>
        </ul>
        {activeTab}
      </div>
    )
  }
}