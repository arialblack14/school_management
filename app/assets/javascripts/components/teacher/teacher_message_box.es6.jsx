class TeacherMessageBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-5 pull-right">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Recent Messages</h3>
          </div>
          <div className="panel-body">
            <ul>
              {this.props.messages.map(function(element) {
                return <li>{element.subject}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}