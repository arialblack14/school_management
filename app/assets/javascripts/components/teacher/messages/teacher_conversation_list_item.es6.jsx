class TeacherConversationListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.handleVisibleTab = this.handleVisibleTab.bind(this);
  }
  handleVisibleTab() {
    let toggled = !this.state.visible;
    this.setState({visible: toggled});
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
              return <TeacherMessageListItem 
                      key={element.id} 
                      subject={`Re: ${element.subject}`}
                      body={element.body}
                      inbox={true}
                      sender={element.sender.name}
                      />
            })}
            </div>
          </li>
        </ul>
      </div>
      )
  }
}