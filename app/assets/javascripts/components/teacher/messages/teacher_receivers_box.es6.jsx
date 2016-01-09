class TeacherReceiversBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groups: [], lessons: [], users: [], hidden: true};
  }
  componentWillReceiveProps(nextProps) {
    let listedItems = {groups: [], lessons: [], users: []}
    nextProps.groups.map(function(element) {
      if(nextProps.listedGroups.has(element.id)) {
        listedItems.groups.push({id: element.id, name: element.name})
      }
    }, this);
    nextProps.lessons.map(function(element) {
      if(nextProps.listedLessons.has(element.id)) {
        listedItems.lessons.push({id: element.id, name: element.name})
      }
    }, this);
    nextProps.users.map(function(element) {
      if(nextProps.listedUsers.has(element.id)) {
        listedItems.users.push({id: element.id, name: element.name})
      }
    }, this);
    this.setState(listedItems);
    this.setState({hidden: false})
  }
  render() {
    let groups =[], lessons = [], users = [];
    this.state.groups.map(function(element){
      groups.push(<TeacherMessageReceiverListItem 
                          key={element.id}
                          id={element.id} 
                          name={element.name}
                          type="group"
                          symbol="minus"
                          getItem={this.props.removeItem}/>);
    },this);
    this.state.lessons.map(function(element){
      lessons.push(<TeacherMessageReceiverListItem 
                          key={element.id}
                          id={element.id} 
                          name={element.name}
                          type="lesson"
                          symbol="minus"
                          getItem={this.props.removeItem}/>);
    },this);
    this.state.users.map(function(element){
      users.push(<TeacherMessageReceiverListItem 
                          key={element.id}
                          id={element.id} 
                          name={element.name}
                          type="user"
                          symbol="minus"
                          getItem={this.props.removeItem}/>);
    },this);
    return(
      <div className={this.state.hidden ? "hidden" : "well well-lg"}>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Receivers:</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>Groups:</th>
              <td>
                {groups}
              </td>
            </tr>
            <tr><th>Lessons:</th>
              <td>
                {lessons}
              </td>
            </tr>
            <tr><th>Users:</th>
              <td>
                {users}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}