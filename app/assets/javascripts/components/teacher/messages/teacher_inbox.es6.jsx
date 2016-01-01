class TeacherInbox extends React.Component {
  constructor(props) {
    super(props);
    this.extractReceivers = this.extractReceivers.bind(this);
  }
  extractReceivers(val) {
    let receivers = [];
    val.message.receipts.map(function(element) {
      if(element.mailbox_type == "inbox") {
        receivers.push(element.receiver.name);
      };
    });
    return receivers;
  }
  render() {
    return (
      <div>
        {this.props.inbox.map(function(element) {
          let receivers = this.extractReceivers(element);
              return <TeacherMessageListItem 
                      key={element.message.id} 
                      subject={element.message.subject}
                      body={element.message.body}
                      inbox={true}
                      sender={element.message.sender.name}
                      receivers={receivers}/>
            }, this)}
        <hr />
      </div>
    )
  }
}