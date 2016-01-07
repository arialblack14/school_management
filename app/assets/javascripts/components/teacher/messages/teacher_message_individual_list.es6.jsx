class TeacherMessageIndividualList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: ""};
  }
  componentDidMount() {
    $.get("/get_users", function(data){
      this.setState({users: data.teacher_dashboard});
    }.bind(this));
  }
  render() {
    let userListItems = [];
    if(this.state.users.length > 0) {
      this.state.users.map(function(element){
        userListItems.push(<TeacherMessageIndividualListItem key={element.id} name={element.name}/>);
      });
    } else {
      userListItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
    }
    return(
      <div className="col-md-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title"><b>User listing</b></h3>
          </div>
          <div className="panel-body">
            <p>Pick person</p>
            <ul className="nav nav-pills">
              {userListItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}