class TeacherMessageSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groups: "", lessons: "", users: "", activeTab: this.props.activeTab};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({activeTab: nextProps.activeTab});
  }
  componentDidMount() {
    // getting grops
    $.get("/get_groups", function(data){
      this.setState({groups: data.teacher_dashboard});
    }.bind(this));
    // getting users
    $.get("/get_users", function(data){
      this.setState({users: data.teacher_dashboard});
    }.bind(this));
    // getting lessons
    $.get("/get_lessons", function(data){
      this.setState({lessons: data.teacher_dashboard});
    }.bind(this));
  }
  render() {
    let listItems = [];
    switch(this.state.activeTab) {
      case "group":
        if(this.state.groups.length > 0) {
          this.state.groups.map(function(element){
            listItems.push(<TeacherMessageGroupListItem key={element.id} name={element.name}/>);
          });
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
      case "lesson":
        if(this.state.lessons.length > 0) {
          this.state.lessons.map(function(element){
            listItems.push(<TeacherMessageLessonListItem key={element.id} name={element.name}/>);
          });
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
      case "user":
        if(this.state.users.length > 0) {
          this.state.users.map(function(element){
            listItems.push(<TeacherMessageIndividualListItem key={element.id} name={element.name}/>);
          });
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
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
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}