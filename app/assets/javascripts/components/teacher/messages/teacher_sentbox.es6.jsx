class TeacherSentbox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.sentbox.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.id} 
                      conversation={element}
                      />
            }, this)}
        <hr />
      </div>
    )
  }
}