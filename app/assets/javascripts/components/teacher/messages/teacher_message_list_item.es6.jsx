class TeacherMessageListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="panel panel-default"> 
        <div className="panel-heading">
          <b>{this.props.subject}</b>
        </div>
        <div className="panel-body">
          <p>{this.props.message.body}</p>
          <i><b>{this.props.inbox ? "Sender: " : "Sent to: "}</b>
          { this.props.inbox ? this.props.message.sender.name : this.props.message.receivers[0].name}</i>
        </div>
      </div>
    )
  }
}