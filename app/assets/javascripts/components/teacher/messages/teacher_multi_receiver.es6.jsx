class TeacherMultiReceiver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: "groups", items: {groups: new Set(), lessons: new Set(), users: new Set()}};
    this.handleActiveTab = this.handleActiveTab.bind(this);
    this.getItem = this.getItem.bind(this);
  }
  handleActiveTab(e) {
    let newState = e.target.id;
    this.setState({activeTab: newState});
  }
  getItem(e) {
    let target = e.currentTarget;
    let items = this.state.items;
    switch(target.type) {
      case "group":
        items.groups.add(parseInt(target.id));
        break;
      case "lesson":
        items.lessons.add(parseInt(target.id));
        break;
      case "user":
        items.users.add(parseInt(target.id));
        break;
    }
    this.setState({items: items});
  }
  render() {
    let tab;
    switch(this.state.activeTab) {
      case "groups":
        tab = <TeacherMessageSelectBox disabledGroups={this.state.items.groups} getItem={this.getItem} activeTab="group"/>;
        break;
      case "lessons":
        tab = <TeacherMessageSelectBox disabledLessons={this.state.items.lessons} getItem={this.getItem} activeTab="lesson"/>;
        break;
      case "individual":
        tab = <TeacherMessageSelectBox disabledUsers={this.state.items.users} getItem={this.getItem} activeTab="user"/>;
        break;
    }
    return(
      <div>
        <TeacherReceiversBox groups={this.state.items.groups} 
                             users={this.state.items.users} 
                             lessons={this.state.items.lessons}/>
        <ul className="nav nav-pills">
          <li role="presentation"
            onClick={this.handleActiveTab} 
            className={this.state.activeTab == "groups" ? "active nav-links" : "nav-links"}>
            <a id="groups">Groups</a>
          </li>
          <li role="presentation"
            onClick={this.handleActiveTab}
            className={this.state.activeTab == "lessons" ? "active nav-links" : "nav-links"}>
            <a id="lessons">Lessons</a></li>
          <li role="presentation"
            onClick={this.handleActiveTab}
            className={this.state.activeTab == "individual" ? "active nav-links" : "nav-links"}>
            <a id="individual">Individual</a>
          </li>
        </ul>
        <br/>
        <div>
          {tab}
        </div>
      </div>
    )
  }
}