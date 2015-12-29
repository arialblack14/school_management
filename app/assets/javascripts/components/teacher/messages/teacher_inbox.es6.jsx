class TeacherInbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.inbox.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.message.id} 
                      subject={element.message.subject}
                      body={element.message.body}
                      inbox={true}
                      sender={element.message.sender.name}/>
            })}
        <hr />
      </div>
    )
  }
}