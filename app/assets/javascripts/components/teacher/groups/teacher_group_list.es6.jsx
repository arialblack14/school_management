class TeacherGroupList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-7 pull-left">
        <div className="panel panel-info">
          <div className="panel-heading">Groups</div>
          <div className="panel-body">
            <p>Hello {this.props.currentUser}, here you can see groups you're assinged in.</p>
          </div>
          <ul className="list-group">
            {this.props.groups.map(function(element){
              return <TeacherGroupListItem group={element} key={element.id} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}