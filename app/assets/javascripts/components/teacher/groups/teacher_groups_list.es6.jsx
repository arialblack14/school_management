class TeacherGroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groupLoaded: false}
    this.getGroup = this.getGroup.bind(this);
  }
  componentWillMount() {
    this.getGroup(this.props.groups[0].id);
  }
  getGroup(id) {
    console.log(this.state)
    this.setState({groupLoaded: false})
    $.get('/get_groups', {group_id: id})
      .done(function(data) {
        this.setState({groupLoaded: true, group: data.group});
      }.bind(this))
  }
  render() {
    return (
      <div>
        <div className="col-md-3 col-sm-4 pull-left">
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
                        key={element.id}
                        getActiveGroup={this.getGroup}
                        activeGroupId={this.state.groupLoaded ? this.state.group.id : false}/>
              }, this)}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <TeacherGroupInfoList groupLoaded={this.state.groupLoaded} group={this.state.group}/>
        </div>
      </div>
    )
  }
}