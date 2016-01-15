class TeacherGroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeGroupId: this.props.groups[0].id, groupLoaded: false}
    this.changeActiveGroupId = this.changeActiveGroupId.bind(this)
    this.getGroup = this.getGroup.bind(this);
  }
  changeActiveGroupId(id) {
    this.setState({activeGroupId: id});
  }
  componentDidMount() {
    this.getGroup();
  }
  getGroup() {
    $.get('/get_groups', {group_id: this.state.activeGroupId})
      .done(function(data) {
        this.setState({groupLoaded: true, group: data});
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
                        activeGroupId={this.state.activeGroupId}
                        getActiveGroupId={this.changeActiveGroupId}
                        getActiveGroup={this.getGroup}
                        groupLoaded={this.state.groupLoaded}/>
              }, this)}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <TeacherGroupInfoList group={this.props.group}/>
        </div>
      </div>
    )
  }
}