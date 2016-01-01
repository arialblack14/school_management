class TeacherMessageBox extends React.Component {
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
      <div className="col-md-5 pull-right">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Recent Messages</h3>
          </div>
          <div className="panel-body">
            {this.props.inbox.map(function(element) {
              let receivers = this.extractReceivers(element);
              return <TeacherMessageListItem
                      key={element.message.id} 
                      subject={element.message.subject}
                      body={element.message.body}
                      inbox={true}
                      sender={element.message.sender.name}
                      receivers={receivers}
                      />
            }, this)}
          </div>
        </div>
      </div>
    )
  }
}