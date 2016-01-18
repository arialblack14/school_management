class TeacherGroupInfoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {groupReceived: false}
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
          {this.state.groupReceived ?
          <table className="table">
            <thead>
              <tr><th>Group name: {this.state.group.name}</th></tr>
            </thead>
            <tbody>
              {this.state.group.lessons.map(function(element) {
                return <tr>
                         <td>
                           <b>{element.name}</b><br/>
                           <button className="btn btn-warning">Dates:</button>
                           <button className="btn btn-primary">Students:</button>
                           <button className="btn btn-danger">Events:</button>
                          </td>
                        </tr>
              }, this)}
            </tbody>
          </table> :
          <p>Loading...</p>
          }
        </div>
      </div>
    )
  }
}