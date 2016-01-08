class TeacherMessageSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: this.props.activeTab};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({activeTab: nextProps.activeTab});
  }
  render() {
    let settings = {panel: "info", listing: "Group", receivers: "Every student/teacher which is assigned to the group will receive message."};
    let listItems = [];
    switch(this.state.activeTab) {
      case "group":
        if(this.props.groups.length > 0) {
          this.props.groups.map(function(element){
            let disabled = false;
            if(this.props.activeItems.groups.has(element.id)) {
              disabled = true;
            };
            listItems.push(<TeacherMessageReceiverListItem getItem={this.props.getItem}
                            id={element.id} type="group" 
                            key={element.id} name={element.name}
                            disabled={disabled}/>);
          }, this);
          settings = {
            panel: "info", 
            listing: "Group", 
            receivers: "Every student/teacher which is assigned to the group will receive message."
          };
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
      case "lesson":
        if(this.props.lessons.length > 0) {
          this.props.lessons.map(function(element){
            let disabled = false;
            if(this.props.activeItems.lessons.has(element.id)) {
              disabled = true;
            };
            listItems.push(<TeacherMessageReceiverListItem getItem={this.props.getItem}
                            id={element.id} type="lesson" 
                            key={element.id} name={element.name}
                            disabled={disabled}/>);
          }, this);
          settings = {
            panel: "warning", 
            listing: "Lesson", 
            receivers: "Every student/teacher which is assigned to the lesson will receive message."
          };
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
      case "user":
        if(this.props.users.length > 0) {
          this.props.users.map(function(element){
            let disabled = false;
            if(this.props.activeItems.users.has(element.id)) {
              disabled = true;
            };
            listItems.push(<TeacherMessageReceiverListItem getItem={this.props.getItem} 
                            key={element.id} name={element.name} id={element.id}
                            type="user" disabled={disabled}/>);
          },this);
          settings = {
            panel: "danger", 
            listing: "User", 
            receivers: "Pick user(s)."
          };
        } else {
          listItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
        };
        break;
    }
    return(
      <div className="col-md-6">
        <div className={`panel panel-${settings.panel}`}>
          <div className="panel-heading">
            <h3 className="panel-title"><b>{settings.listing} listing</b></h3>
          </div>
          <div className="panel-body">
            <p>{settings.receivers}</p>
            <ul className="nav nav-pills">
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}