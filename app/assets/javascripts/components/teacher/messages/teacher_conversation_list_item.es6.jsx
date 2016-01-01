class TeacherConversationListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.count}</span>
            <b>Conversation:</b> {this.props.title}
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
          </li>
        </ul>
      </div>
      )
  }
}