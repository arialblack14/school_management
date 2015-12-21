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
            {this.props.messages.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.conversation.id} 
                      subject={element.conversation.subject}
                      message={element.conversation.messages.slice(-1)[0]}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}