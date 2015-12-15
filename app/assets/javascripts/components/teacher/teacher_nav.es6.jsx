class TeacherNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/teacher"><b>Home</b></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a id="groups" className="nav-links" onClick={this.props.handleActiveTab}>Groups</a></li>
              <li><a id="lessons" className="nav-links" onClick={this.props.handleActiveTab}>Lessons</a></li>
              <li><a id="students" className="nav-links" onClick={this.props.handleActiveTab}>Students</a></li> 
              <li><a id="events" className="nav-links" onClick={this.props.handleActiveTab}>Events</a></li>
              <li><a id="messages" className="nav-links" onClick={this.props.handleActiveTab}>Messages</a></li>           
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