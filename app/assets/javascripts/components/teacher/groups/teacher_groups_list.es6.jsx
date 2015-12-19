class TeacherGroupsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-7 pull-left">
        <div className="panel panel-info">
          <div className="panel-heading">Groups</div>
          <div className="panel-body">
            <p>Hello {this.props.currentUser}, here you can see groups you're assinged in. 
            Click on each if you want to see more info.</p>
          </div>
          <ul className="list-group">
            {this.props.groups.map(function(element){
              return <TeacherGroupListItem 
                      group={element}
                      key={element.id}/>
            }, this)}
          </ul>
        </div>
      </div>
    )
  }
}