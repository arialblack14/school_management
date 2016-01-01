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
                      message={element.message}/>
            }, this)}
        <hr />
      </div>
    )
  }
}