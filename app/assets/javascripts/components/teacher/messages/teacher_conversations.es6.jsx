class TeacherConversations extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Click on each to see content.</p>
        {this.props.conversations.map(function(element) {
          return <TeacherConversationListItem 
                  key={element.conversation.id}
                  count={element.conversation.messages.length}
                  title={element.conversation.subject}
                  messages={element.conversation.messages}
                  />
        })}
      </div>
    )
  }
}