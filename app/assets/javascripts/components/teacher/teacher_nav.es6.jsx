class TeacherNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/teacher"><b>Home</b></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a onClick={this.props.changeActiveTab("groups")}>Groups</a></li>
              <li><a onClick={this.props.changeActiveTab("lessons")}>Lessons</a></li>
              <li><a onClick={this.props.changeActiveTab("students")}>Students</a></li> 
              <li><a onClick={this.props.changeActiveTab("events")}>Events</a></li>
              <li><a onClick={this.props.changeActiveTab("messages")}>Messages</a></li>           
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a>Signed in as <b>{this.props.currentUser}</b></a></li>
              <li>
                <a rel="nofollow" data-method="delete" href="/users/sign_out">
                <span className="label label-danger"><b>Log out</b></span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}