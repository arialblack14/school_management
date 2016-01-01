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
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.count}</span>
            <b>Conversation:</b> {this.props.title}
            <button className="btn btn-sm btn-success conversation-button"
            onClick={this.handleVisibleTab}>
            {this.state.visible ? "Hide" : "Show"}
            </button>
            <div className={this.state.visible ? "" : "hidden"}>
            <hr />
            {this.props.messages.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.id} 
                      message={element}
                      />
            }, this)}
            </div>
          </li>
        </ul>
      </div>
      )
  }
}