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
  render() {
    let activeTab;
    switch(this.state.activeTab) {
      case 'inbox':
        activeTab = <TeacherInbox inbox={this.props.inbox}/>;
        break;
      case 'sentbox':
        activeTab = <TeacherSentbox sentbox={this.props.sentbox}/>;
        break;
      case 'conversations':
        activeTab = <TeacherConversations />;
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
          <li id="conversations"
          className={this.state.activeTab == "conversations" ? "active nav-links" : "nav-links"} 
          onClick={this.changeActiveTab}><a>Conversations</a></li>
        </ul>
        {activeTab}
      </div>
    )
  }
}