class TeacherConversations extends React.Component {
  constructor(props) {
    super(props);
    this.reverse = this.reverse.bind(this);
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
      <div>
        <p>Click on each to see content.</p>
        {this.props.conversations.map(function(element) {
          return <TeacherConversationListItem 
                  key={element.conversation.id}
                  count={element.conversation.messages.length}
                  title={element.conversation.subject}
                  messages={this.reverse(element.conversation.messages)}
                  />
        }, this)}
      </div>
    )
  }
}