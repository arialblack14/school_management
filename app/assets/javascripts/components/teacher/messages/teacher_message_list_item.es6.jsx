class TeacherMessageListItem extends React.Component {
  constructor(props) {
    super(props);
    this.extractReceivers = this.extractReceivers.bind(this);
  }
  extractReceivers() {
    let receivers = [];
    this.props.message.receipts.map(function(element) {
      if(element.mailbox_type == "inbox") {
        receivers.push(element.receiver.name);
      };
    });
    return receivers;
  }
  render() {
    return (
      <div className="panel panel-default"> 
        <div className="panel-heading">
          <b>{this.props.message.subject}</b>
        </div>
        <div className="panel-body">
          <p>{this.props.message.body}</p>
          <hr className="message-list-item"/>
          <i>Sender: {this.props.message.sender.name}</i><br/>
          <i>Receiver(s): {this.extractReceivers()}</i>
          <TeacherMessageReplyForm conversationId={this.props.message.conversation_id}/>
        </div>
      </div>
    )
  }
}