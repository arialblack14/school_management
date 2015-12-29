class TeacherConversationListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.count}</span>
            <b>Subject:</b> {this.props.title}
            {this.props.messages.map(function(element) {
              return <TeacherMessageListItem 
                      key={element.id} 
                      subject={"yo"}
                      message={element}
                      inbox={true}
                      />
            })}
          </li>
        </ul>
      </div>
      )
  }
}