class TeacherMultiReceiver extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveTab = this.handleActiveTab.bind(this);
    this.state = {activeTab: "groups"}
  }
  handleActiveTab(e) {
    let newState = e.target.id;
    this.setState({activeTab: newState});
  }
  render() {
    let tab;
    switch(this.state.activeTab) {
      case "groups":
        tab = <TeacherMessageGroupList />;
        break;
      case "lessons":
        tab = <TeacherMessageLessonList />;
        break;
      case "individual":
        tab = <TeacherMessageIndividualList />;
        break;
    }
    return(
      <div>
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