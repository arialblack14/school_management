class TeacherConversationListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.handleVisibleTab = this.handleVisibleTab.bind(this);
    this.extractReceivers = this.extractReceivers.bind(this);
  }
  handleVisibleTab() {
    let toggled = !this.state.visible;
    this.setState({visible: toggled});
  }
  extractReceivers(val) {
    let receivers = [];
    val.receipts.map(function(element) {
      if(element.mailbox_type == "inbox") {
        receivers.push(element.receiver.name);
      };
    });
    return receivers;
  }
  render() {
    return (
      <div onClick={this.handleVisibleTab}>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.count}</span>
            <b>Conversation:</b> {this.props.title}
            <div className={this.state.visible ? "" : "hidden"}>
            <hr />
            {this.props.messages.map(function(element) {
              let receivers = this.extractReceivers(element);
              return <TeacherMessageListItem 
                      key={element.id} 
                      subject={`Re: ${element.subject}`}
                      body={element.body}
                      inbox={true}
                      sender={element.sender.name}
                      receivers={receivers}
                      />
            }, this)}
            </div>
          </li>
        </ul>
      </div>
      )
  }
}