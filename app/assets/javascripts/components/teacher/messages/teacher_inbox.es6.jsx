class TeacherInbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.inbox.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.id} 
                      conversation={element}
                      getMessages={this.props.getMessages}
                      />
            }, this)}
        <hr />
      </div>
    )
  }
}