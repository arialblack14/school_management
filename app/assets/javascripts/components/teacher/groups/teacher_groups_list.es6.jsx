class TeacherGroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groupLoaded: false}
    this.getGroup = this.getGroup.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.groups.length > 0) {
      console.log('hello')
      this.getGroup(nextProps.groups[0].id);
    }
  }
  getGroup(id) {
    this.setState({groupLoaded: false})
    $.get('/get_teacher_groups', {group_id: id})
      .done(function(data) {
        console.log(data)
        this.setState({groupLoaded: true, group: data.group});
      }.bind(this))
  }
  render() {
    return (
      <div>
        <div className="col-md-2 col-sm-4 pull-left">
          <div className="panel panel-info">
            <div className="panel-heading">Groups</div>
            <div className="panel-body">
              <p>Click on each if you want to see more info.</p>
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
        <div className="col-md-5">
          <TeacherGroupInfoList groupLoaded={this.state.groupLoaded} group={this.state.group}/>
        </div>
      </div>
    )
  }
}