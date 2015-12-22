class TeacherSentbox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.sentbox.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.conversation.id} 
                      subject={element.conversation.subject}
                      message={element.conversation.messages.slice(-1)[0]}
                      inbox={false}/>
            })}
        <hr />
      </div>
    )
  }
}