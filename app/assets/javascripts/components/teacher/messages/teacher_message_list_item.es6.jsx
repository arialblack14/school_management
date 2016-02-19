class TeacherMessageListItem extends React.Component {
  constructor(props) {
    super(props);
    this.extractReceivers = this.extractReceivers.bind(this);
  }
  extractReceivers() {
    let receivers = [];
    this.props.message.receipts.map(function(element) {
      if(element.mailbox_type == "inbox") {
        receivers.push(element.receiver.name + ", ");
      };
    });
    return receivers;
  }
  render() {
    return (
      <div className="panel panel-default"> 
        <div className="panel-heading">
          <b>Subject: {this.props.conversation.subject}</b>
        </div>
        <div className="panel-body">
          {this.props.conversation.messages.map(function(element) {
            return ( <p key={element.id}>
              <i><b>{element.sender.name}</b></i><br/>
              {element.body}
              </p>
              )
          }, this)}
          <hr className="message-list-item"/>
          <TeacherMessageReplyForm conversationId={this.props.conversation.conversation_id}/>
        </div>
      </div>
    )
  }
}