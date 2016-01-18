class TeacherGroupInfoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {groupReceived: this.props.groupLoaded}
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.groupLoaded) {
      this.setState({group: nextProps.group, groupReceived: true})
    } else {
      this.setState({groupReceived: false})
    }
  }
  render() {
    return(
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">Group Info {this.state.groupReceived ? "" : <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"/>}</div>
          <div className="panel-body">
            <p>Information:</p>
          </div>

          <table className="table">
            <thead>
              <tr><th>Group name: {this.state.groupReceived ? this.state.group.name : ""}</th></tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}