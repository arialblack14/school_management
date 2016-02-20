class TeacherMessageListItem extends React.Component {
  constructor(props) {
    super(props);
    this.extractReceivers = this.extractReceivers.bind(this);
  }
  extractReceivers() {
    let receivers = new Set();
    this.props.conversation.messages.map(function(message) {
      message.receipts.map(function(receipt) {
        if(receipt.mailbox_type == "inbox") {
          receivers.add(receipt.receiver.name + ", ");
        };
      });
    });
    let arrayReceivers = Array.from(receivers);
    if(arrayReceivers.length > 0) {
      // cutting last ", "
      let lastItem = arrayReceivers[arrayReceivers.length - 1];
      arrayReceivers[arrayReceivers.length - 1] = lastItem.substring(0, lastItem.length-2)
    }
    return arrayReceivers;
  }
  reverse(a) {
    let temp = [];
    for (let i = a.length - 1; i >=0; i--) {
      temp.push(a[i]);
    }
    return temp;
  }
  render() {

    return (
      <div className="panel panel-default"> 
        <div className="panel-heading">
          <b>Subject: {this.props.conversation.subject}</b>
        </div>
        <div className="panel-body">
          {this.reverse(this.props.conversation.messages).map(function(element) {
            return ( <p key={element.id}>
              <i><b>{element.sender.name}</b></i><br/>
              {element.body}
              </p>
              )
          }, this)}
          <hr className="message-list-item"/>
          <TeacherMessageReplyForm conversationId={this.props.conversation.id} getMessages={this.props.getMessages}/>
          <div className={this.props.isSentbox ? "" : "hidden"}>
            <br />
            <b>Receivers:</b> {this.extractReceivers()}
          </div>
        </div>
      </div>
    )
  }
}