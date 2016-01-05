class TeacherMessageGroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groups: ""};
  }
  componentDidMount() {
    $.get("/get_groups", function(data){
      this.setState({groups: data.teacher_dashboard});
    }.bind(this));
  }
  render() {
    let groupListItems = [];
    if(this.state.groups.length > 0) {
      this.state.groups.map(function(element){
        groupListItems.push(<TeacherMessageGroupListItem key={element.id} name={element.name}/>);
      });
    } else {
      groupListItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
    }
    return(
      <div className="col-md-6">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title"><b>Group listing</b></h3>
          </div>
          <div className="panel-body">
            <p>Every student/teacher which is assigned to the group will receive message.</p>
            <ul className="nav nav-pills">
              {groupListItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}